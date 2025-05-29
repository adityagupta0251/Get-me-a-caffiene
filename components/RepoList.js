"use client";
import { useEffect, useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from '@clerk/nextjs';

export default function RepoList() {
  const supabase = useSupabaseClient();
  const { user } = useUser();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchRepos = async () => {
      const { data, error } = await supabase
        .from('user_repos')
        .select('*')
        .eq('user_id', user.id);

      if (!error) {
        setRepos(data);
      } else {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, [user, supabase]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Your GitHub Repositories</h2>
      <ul className="mt-4">
        {repos.map((repo) => (
          <li key={repo.github_id} className="mb-2 p-2 border rounded">
            <strong>{repo.repo_full_name}</strong>
            <p>{repo.repo_description}</p>
            <span className="text-sm text-gray-500">
              Private: {repo.private ? 'Yes' : 'No'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
