// pages/github-callback.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useUser } from '@clerk/nextjs';

export default function GitHubCallback() {
  const supabase = useSupabaseClient();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    (async () => {
      // Fetch public repos directly from GitHub API for your username
      const res = await fetch('https://api.github.com/users/adityagupta0251/repos');
      const repos = await res.json();

      for (const repo of repos) {
        await supabase.from('user_repos').upsert({
          user_id: user.id,
          repo_full_name: repo.full_name,
          github_id: repo.id,
          repo_description: repo.description,
          private: repo.private,
        }, { onConflict: 'github_id' });
      }

      router.replace('/');
    })();
  }, [user, supabase, router]);

  return <p>Loading your GitHub repositories…</p>;
}
