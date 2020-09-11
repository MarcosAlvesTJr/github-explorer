import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 70px;

  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-right: 30px;
  }

  strong {
    color: #3d3d4d;
    font-size: 36px;
    line-height: 42px;
  }

  p {
    font-size: 20px;
    color: #737380;
  }
`;

export const RepositoryStatistics = styled.div`
  display: flex;
  margin-top: 40px;

  div {
    & + div {
      margin-left: 60px;
    }
  }

  strong {
    color: #3d3d4d;
    font-size: 36px;
  }

  p {
    color: #6c6c80;
    font-size: 20px;
  }
`;
