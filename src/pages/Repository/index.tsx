import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, Issues, RepositoryInfo, RepositoryStatistics } from './styles';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
  forks: number;
  open_issues: number;
  stargazers_count: number;
}

interface Issue {
  id: number;
  title: string;
  user: {
    login: string;
  };
  html_url: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function loadData() {
      const [repositoryResponse, issuesResponse] = await Promise.all([
        await api.get<Repository>(`repos/${params.repository}`),
        await api.get<Issue[]>(`repos/${params.repository}/issues`),
      ]);
      setRepository(repositoryResponse.data);
      setIssues(issuesResponse.data);
    }

    loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <>
          <RepositoryInfo>
            <img src={repository.owner.avatar_url} alt="Imagem de usuário" />
            <div>
              <strong>{params.repository}</strong>
              <p>{repository.description}</p>
            </div>
          </RepositoryInfo>

          <RepositoryStatistics>
            <div>
              <strong>{repository.stargazers_count}</strong>
              <p>Stars</p>
            </div>

            <div>
              <strong>{repository.forks}</strong>
              <p>Forks</p>
            </div>

            <div>
              <strong>{repository.open_issues}</strong>
              <p>Issues abertas</p>
            </div>
          </RepositoryStatistics>
        </>
      )}

      {issues && (
        <Issues>
          {issues.map(issue => (
            <a href={issue.html_url} key={issue.id.toString()}>
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          ))}
        </Issues>
      )}
    </>
  );
};

export default Repository;
