  import styled from 'styled-components/macro';

  export const Inner = styled.div`
    @media (max-width: 1000px) {
      flex-direction: column;
    }

    display: flex;
    align-items: center;
    flex-direction: ${({direction}) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;
  `;

export const Container = styled.div``;
