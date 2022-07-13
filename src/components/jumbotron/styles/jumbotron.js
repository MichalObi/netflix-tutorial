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

export const Pane = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  @media (max-width: 600px) {
    font-size: 35px;
  }

  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;
`;

export const SubTitle = styled.h2`
  @media (max-width: 600px) {
    font-size: 18px;
  }

  font-size: 26px;
  font-weight: normal;
  line-height: normal;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
