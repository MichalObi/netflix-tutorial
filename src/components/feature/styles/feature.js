import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid solid #222;
  text-align: center;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  @media(max-width: 600px) {
    font-size: 35px;
  }

  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 500;
  margin: auto;
`;

export const SubTitle = styled.h2`
  @media(max-width: 600px) {
    font-size: 35px;
  }

  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;
  `;
