import styled from "styled-components";
import { devices } from "../../styles/globalVariables";

export const ProjectsGallery = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ProjectCard = styled.li`
  display: flex;
  justify-content: center;
  margin: 20px;
  img {
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
    transition: 0.5s;
    object-fit: cover;
    transition: 0.6s cubic-bezier(0.755, 0.05, 0.855, 0.06);
    filter: blur(1px) grayscale(80%);
    transform-style: preserve-3d;
    cursor: none;
    @media ${devices.laptop} {
    }
  }
  img:hover {
    cursor: none;
    transition: 1s;
    transform: scale(1.03);
    filter: blur(0px) grayscale(0) contrast(110%);
    box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 42px;
  font-family: "Neue Montreal";
  display: flex;
  justify-content: center;
`;
