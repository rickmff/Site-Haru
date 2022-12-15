import styled from "styled-components";

export const ProjectsGallery = styled.ul`
  display: flex;
  perspective: 1000px;
`;

export const ProjectCard = styled.li`
  margin: 10px;
  img {
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
    transition: 0.5s;
    object-fit: cover;
    transition: 0.6s cubic-bezier(0.755, 0.05, 0.855, 0.06);
    filter: blur(1px) grayscale(80%);
    transform-style: preserve-3d;
    cursor: none;
  }
  img:hover {
    cursor: none;
    transition: 1s;
    transform: scale(1.03);
    filter: blur(0px) grayscale(0) contrast(110%);
    box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  }
`;
