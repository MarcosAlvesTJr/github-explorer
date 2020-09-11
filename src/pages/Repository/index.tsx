import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Header, RepositoryInfo, RepositoryStatistics } from './styles';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <img
          src="https://avatars2.githubusercontent.com/u/39447269?s=460&u=a9e3e3cb9958dc5e10a11ec7a439d0891fb0b3ac&v=4"
          alt="Marcos Alves"
        />
        <div>
          <strong>{params.repository}</strong>
          <p>descrição deste repositório</p>
        </div>
      </RepositoryInfo>

      <RepositoryStatistics>
        <div>
          <strong>1808</strong>
          <p>Stars</p>
        </div>

        <div>
          <strong>48</strong>
          <p>Forks</p>
        </div>

        <div>
          <strong>67</strong>
          <p>Issues abertas</p>
        </div>
      </RepositoryStatistics>
    </>
  );
};

export default Repository;
