const { createClient } = require('@supabase/supabase-js');
const { getAuth } = require('@clerk/nextjs/server');

module.exports = async function handler(req, res) {
  const { userId } = getAuth(req);
  if (!userId) return res.status(401).json({ error: 'Unauthorized' });

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { data: repoList, error: repoError } = await supabase
    .from('user_repos')
    .select('*')
    .eq('id', req.query.id)
    .eq('user_id', userId)
    .limit(1);

  const repo = repoList?.[0];
  if (!repo) return res.status(404).json({ error: 'Repo not found' });

  const { data: sessionData } = await supabase.auth.getSession();
  const githubToken = sessionData?.session?.provider_token;
  if (!githubToken) return res.status(403).json({ error: 'Missing GitHub token' });

  const { data: lastSyncList } = await supabase
    .from('repo_syncs')
    .select('last_commit_sha')
    .eq('user_repo_id', repo.id)
    .order('updated_at', { ascending: false })
    .limit(1);

  const since = lastSyncList?.[0]?.last_commit_sha;
  const commitsUrl = `https://api.github.com/repos/${repo.repo_full_name}/commits${since ? `?sha=${since}` : ''}`;

  const ghRes = await fetch(commitsUrl, {
    headers: { Authorization: `Bearer ${githubToken}` }
  });
  const commits = await ghRes.json();

  if (Array.isArray(commits) && commits.length) {
    await supabase.from('repo_syncs').insert({
      user_repo_id: repo.id,
      last_commit_sha: commits[0].sha,
      sync_status: 'complete'
    });
  }

  res.status(200).json({ newCommits: commits.length || 0 });
};
