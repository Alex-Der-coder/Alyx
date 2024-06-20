"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface Repo {
  language: string;
  name: string;
  Git: string;
  description: string;
  stars: number;
  techno: string[];
  url: string;
  update: string;
  create: string;
}

const WhatIvebeenworking = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const token = process.env.GITHUB_TOKEN;
  console.log(token);
  
  const getRepos = async ({
    username = 'Alex-Der-coder',
    page = 1,
    per_page = 30,
  } = {}) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?page=${page}&per_page=${per_page}&sort=updated`, {
          headers: {
            Authorization: `token ${token}`
          }
        }
      );
      const repos = await response.json();

      const reposWithTechno = await Promise.all(
        repos.map(async (repo: any) => {
          const languagesResponse = await fetch(repo.languages_url, {
            headers: {
              Authorization: `token ${token}`
            }
          });
          const languagesData = await languagesResponse.json();
          const languages = Object.keys(languagesData);

          return {
            name: repo.name,
            Git: repo.html_url,
            description: repo.description,
            stars: repo.stargazers_count,
            techno: languages,
            url: repo.homepage,
            update: repo.updated_at,
            create: repo.created_at,
            language: repo.language,
          };
        })
      );

      return reposWithTechno
        .sort((first, second) => new Date(second.update).getTime() - new Date(first.update).getTime())
        .slice(0, 5); // Keep only the top 5 projects
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split('T')[0];
    const formattedTime = date.toTimeString().split(' ')[0];
    return { formattedDate, formattedTime };
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repositories = await getRepos();
        setRepos(repositories);
      } catch (error) {
        setError('Error fetching repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black text-lg md:text-lg lg:text-lg mt-20 mb-4'>
        What I've been working on
      </h1>
      {repos.map((repo) => {
        const { formattedDate: createDate, formattedTime: createTime } = formatDate(repo.create);
        const { formattedDate: updateDate, formattedTime: updateTime } = formatDate(repo.update);
        return (
          <div className='w-[75%] bg-slate-500 rounded-[15px] border-2 border-slate-700 w-[75%] flex flex-row justify-between items-center flex-col mt-20' key={repo.name}>
            <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-black text-lg md:text-lg lg:text-lg mb-4'>{repo.name}</h2>
            <p>Description: {repo.description}</p>
            <p>Stars: ⭐ {repo.stars}</p>
            <p>Created at: {createDate} Time: {createTime}</p>
            <p>Updated at: {updateDate} Time: {updateTime}</p>
            <a href={repo.Git}>Repository Link</a>
            <a href={repo.url}>Deployment</a>
            <div className='flex w-[40%] justify-between'>
              {repo.techno.map((tech, index) => (
                <span key={index} className="mr-2 px-2 py-1 bg-gray-200 rounded">{tech}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WhatIvebeenworking;
