"use client";

import React, { useState, useEffect } from "react";
import { Star, GitBranch, Search, ExternalLink, Users, Calendar, MapPin, Globe } from "lucide-react";

const GitHubLearning = () => {
  const [darshRepos, setDarshRepos] = useState([]);
  const [ckSoloRepos, setCkSoloRepos] = useState([]);
  const [adityaRepos, setAdityaRepos] = useState([]);
  const [darshProfile, setDarshProfile] = useState(null);
  const [ckSoloProfile, setCkSoloProfile] = useState(null);
  const [adityaProfile, setAdityaProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          darshRes,
          ckSoloRes,
          adityaRes,
          darshReposRes,
          ckSoloReposRes,
          adityaReposRes
        ] = await Promise.all([
          fetch("https://api.github.com/users/darsh970"),
          fetch("https://api.github.com/users/ck-solo"),
          fetch("https://api.github.com/users/adityagupta0251"),
          fetch("https://api.github.com/users/darsh970/repos?per_page=100&sort=updated"),
          fetch("https://api.github.com/users/ck-solo/repos?per_page=100&sort=updated"),
          fetch("https://api.github.com/users/adityagupta0251/repos?per_page=100&sort=updated")
        ]);

        // Check if all requests were successful
        if (!darshRes.ok || !ckSoloRes.ok || !adityaRes.ok || !darshReposRes.ok || !ckSoloReposRes.ok || !adityaReposRes.ok) {
          throw new Error('Failed to fetch data from GitHub API');
        }

        const [darshData, ckSoloData, adityaData, darshReposData, ckSoloReposData, adityaReposData] = await Promise.all([
          darshRes.json(),
          ckSoloRes.json(),
          adityaRes.json(),
          darshReposRes.json(),
          ckSoloReposRes.json(),
          adityaReposRes.json()
        ]);

        setDarshProfile(darshData);
        setCkSoloProfile(ckSoloData);
        setAdityaProfile(adityaData);
        setDarshRepos(darshReposData);
        setCkSoloRepos(ckSoloReposData);
        setAdityaRepos(adityaReposData);
      } catch (err) {
        setError("Failed to fetch GitHub data. Please check your internet connection and try again.");
        console.error('GitHub API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const allRepos = [...darshRepos, ...ckSoloRepos, ...adityaRepos];

  const categories = [
    "All",
    ...Array.from(
      new Set(allRepos.flatMap(repo => (repo.language ? [repo.language] : [])))
    ).sort()
  ];

  const filteredRepos = allRepos
    .filter(repo =>
      (activeCategory === "All" || repo.language === activeCategory) &&
      (repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: 'bg-yellow-100 text-yellow-800',
      TypeScript: 'bg-blue-100 text-blue-800',
      Python: 'bg-green-100 text-green-800',
      Java: 'bg-red-100 text-red-800',
      'C++': 'bg-purple-100 text-purple-800',
      HTML: 'bg-orange-100 text-orange-800',
      CSS: 'bg-pink-100 text-pink-800',
      Go: 'bg-cyan-100 text-cyan-800',
      Rust: 'bg-amber-100 text-amber-800',
      Dart: 'bg-indigo-100 text-indigo-800',
    };
    return colors[language] || 'bg-gray-100 text-gray-800';
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
        <p className="text-gray-600 font-medium">Loading GitHub data...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-red-50 to-pink-100">
      <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ExternalLink className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="text-red-700 text-2xl font-semibold mb-4">Connection Error</h3>
        <p className="text-red-600 mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-medium"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen mt-25">
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-8 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">GitHub Learning Hub</h1>
            <p className="text-blue-100">Explore collaborative coding projects</p>
          </div>
          <div className="relative">
            <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects and descriptions..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-12 pr-6 py-3 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30 w-80 text-gray-700 bg-white/95 backdrop-blur"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Enhanced Profiles Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Developers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { profile: darshProfile, gradient: "from-blue-500 to-indigo-600", bgGradient: "from-blue-50 to-indigo-50" },
              { profile: ckSoloProfile, gradient: "from-green-500 to-emerald-600", bgGradient: "from-green-50 to-emerald-50" },
              { profile: adityaProfile, gradient: "from-purple-500 to-pink-600", bgGradient: "from-purple-50 to-pink-50" }
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${item.bgGradient} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50`}
              >
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <img
                      src={item.profile.avatar_url}
                      alt={item.profile.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-lg mx-auto"
                    />
                    <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r ${item.gradient} rounded-full border-2 border-white`}></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4">{item.profile.name}</h3>
                  <p className="text-gray-600 font-medium">@{item.profile.login}</p>
                </div>
                
                {item.profile.bio && (
                  <p className="text-gray-700 mb-6 text-center leading-relaxed">{item.profile.bio}</p>
                )}
                
                <div className="space-y-3 mb-6">
                  {item.profile.location && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{item.profile.location}</span>
                    </div>
                  )}
                  {item.profile.blog && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Globe className="w-4 h-4" />
                      <a href={item.profile.blog} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-indigo-600 transition-colors">
                        {item.profile.blog}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Joined {formatDate(item.profile.created_at)}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{item.profile.public_repos}</div>
                    <div className="text-xs text-gray-600">Repositories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{item.profile.followers}</div>
                    <div className="text-xs text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{item.profile.following}</div>
                    <div className="text-xs text-gray-600">Following</div>
                  </div>
                </div>
                
                <a
                  href={item.profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${item.gradient} text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group`}
                >
                  Visit Profile
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Category Filter */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">Explore Projects</h2>
              <p className="text-gray-600">Filter by programming language or technology</p>
            </div>
            <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow">
              Showing {filteredRepos.length} of {allRepos.length} repositories
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full transition-all duration-200 font-medium ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md border border-gray-200"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-2 text-xs opacity-75">
                    ({allRepos.filter(repo => repo.language === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Enhanced Repos Grid */}
        <section>
          {filteredRepos.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No repositories found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredRepos.map(repo => (
                <div key={repo.id} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="flex justify-between items-start mb-6">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors flex items-center gap-2 group"
                    >
                      {repo.name}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    {repo.language && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLanguageColor(repo.language)}`}>
                        {repo.language}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {repo.description || "No description provided."}
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                    <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full">
                      <GitBranch className="w-4 h-4" />
                      {repo.forks_count}
                    </span>
                    <span className="text-xs text-gray-400">
                      Updated {formatDate(repo.updated_at)}
                    </span>
                  </div>
                  
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {repo.topics.slice(0, 6).map(topic => (
                        <span key={topic} className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-xs font-medium border border-indigo-100">
                          {topic}
                        </span>
                      ))}
                      {repo.topics.length > 6 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          +{repo.topics.length - 6} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default GitHubLearning;