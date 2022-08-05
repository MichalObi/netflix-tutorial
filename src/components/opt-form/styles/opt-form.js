import styled from 'styled-components/macro';

export const Container = styled.div`
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }

  display: flex;
  justify-conent: center;
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
  display: flex;
  align-items: center;
  height: 100%;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 23px;
  border: 0;
  cursor: pointer;

  img {
    @media (max-width: 1000px) {
      width: 16px;
    }

    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Text = styled.p``;
