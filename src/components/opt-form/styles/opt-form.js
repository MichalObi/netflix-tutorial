import styled from 'styled-components/macro';

export const Container = styled.div`
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }

  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Input = styled.input`
   max-width: 450px;
   width: 100%;
   border: 0;
   padding: 10px;
   height: 70px;
   box-sizing: border-box;
`;

export const Button = styled.button`
  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }

  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 23px;
  border: 0;
  cursor: pointer;

  &:hover {
      background: #f40612;
  }

  img {
    @media (max-width: 1000px) {
      width: 16px;
    }

    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Text = styled.p`
    @media (max-width: 600px) {
      font-size: 16px;
      line-height: 22px;
    }

    font-size: 19.2px;
    color: white;
    text-align: center;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
