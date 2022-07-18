  import styled from 'styled-components/macro';

  export const Container = styled.div`
    @media (max-width: 1000px) {
      padding: 70px 30px;
    }

    display: flex;
    padding: 70px 56px;
    margin: auto;
    max-width: 1000px;
    flex-direction: column;
  `;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;
