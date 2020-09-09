import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repository } from './styles';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="logo" />
      <Title>Explore repositórios do GitHub.</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repository>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/39447269?s=460&u=a9e3e3cb9958dc5e10a11ec7a439d0891fb0b3ac&v=4"
            alt="Marcos Alves"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/39447269?s=460&u=a9e3e3cb9958dc5e10a11ec7a439d0891fb0b3ac&v=4"
            alt="Marcos Alves"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/39447269?s=460&u=a9e3e3cb9958dc5e10a11ec7a439d0891fb0b3ac&v=4"
            alt="Marcos Alves"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repository>
    </>
  );
};

export default Dashboard;
