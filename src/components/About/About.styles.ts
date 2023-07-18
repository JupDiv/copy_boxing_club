import styled from 'styled-components';
import Image from 'next/image';
//styles layout

//styls page
export const AboutContainer = styled.div`
  max-width: 900px;
  margin: 25px auto;
  padding: 2em;
  background-color: #fedb39;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  color: #293462;
  &:hover {
    box-shadow: 0 0 20px rgba(245, 232, 39, 0.8);
  }

  @media (max-width: 320px) {
    max-width: 93%;
  }

  @media (min-width: 321px) and (max-width: 424px) {
    max-width: 93%;
  }

  @media (min-width: 425px) {
    max-width: 93%;
  }

  @media (min-width: 460px) and (max-width: 567px) {
    max-width: 93%;
  }

  @media (min-width: 568px) and (max-width: 667px) {
    max-width: 93%;
  }

  @media (min-width: 668px) and (max-width: 767px) {
    max-width: 635px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 95%;
  }

  @media (min-width: 1024px) and (max-width: 1365px) {
    max-width: 95%;
  }
`;

export const AboutTitle = styled.h1`
  text-align: center;
  color: #333;
  color: #293462;
`;
export const AboutSubTitle = styled.h2`
  text-align: center;
  color: #333;
  color: #293462;
`;
export const AboutContent = styled.div`
  margin-top: 20px;
`;
export const AboutImage = styled(Image)`
  max-width: 100%;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background-size: contain;
  background-repeat: no-repeat;

  &:hover {
    transform: scale(1.05);
  }
`;
export const AboutText = styled.p`
  margin-top: 10px;
`;
