"use client";
import React, { useState } from 'react';
import { RefreshCw, Github, CheckCircle, AlertCircle } from 'lucide-react';

export default function GitHubFetchButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState('');

  const fetchGitHubRepos = async () => {
    setIsLoading(true);
    setStatus('loading');
    setError('');
    
    try {
      // Fetch public repos from GitHub API
      const response = await fetch('https://api.github.com/users/adityagupta0251/repos');
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const reposData = await response.json();
      
      // Filter and format the repo data
      const formattedRepos = reposData.map(repo => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description,
        private: repo.private,
        language: repo.language,
        stargazersCount: repo.stargazers_count,
        forksCount: repo.forks_count,
        updatedAt: repo.updated_at,
        htmlUrl: repo.html_url
      }));
      
      setRepos(formattedRepos);
      setStatus('success');
      
    } catch (err) {
      setError(err.message || 'Failed to fetch repositories');
      setStatus('error');
      console.error('Error fetching GitHub repos:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'loading':
        return <RefreshCw className="w-4 h-4 animate-spin" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Github className="w-4 h-4" />;
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'loading':
        return 'Fetching...';
      case 'success':
        return `Fetched ${repos.length} repos`;
      case 'error':
        return 'Retry fetch';
      default:
        return 'Fetch GitHub Repos';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <button
          onClick={fetchGitHubRepos}
          disabled={isLoading}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200
            ${isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : status === 'error'
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : status === 'success'
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-md'
            }
          `}
        >
          {getStatusIcon()}
          {getButtonText()}
        </button>
        
        {error && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
      </div>

      {repos.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            GitHub Repositories for adityagupta0251
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-gray-50"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 truncate">
                    {repo.name}
                  </h3>
                  {repo.private && (
                    <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">
                      Private
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {repo.description || 'No description available'}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {repo.language}
                      </span>
                    )}
                    <span>⭐ {repo.stargazersCount}</span>
                    <span>🍴 {repo.forksCount}</span>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                  >
                    View on GitHub →
                  </a>
                </div>
                
                <div className="text-xs text-gray-400 mt-2">
                  Updated: {new Date(repo.updatedAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}