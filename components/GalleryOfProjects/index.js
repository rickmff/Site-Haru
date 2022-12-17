import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import {Row, Col_6} from "../../styles/globalComponents"

export default function GalleryOfProjects({ allProjects }) {
  return (
    <div>
      <S.SectionTitle>Portfolio</S.SectionTitle>
      <Row>
        <Col_6>
        <S.ProjectsGallery>
          {allProjects.map((project, index) => (
            (index >= (allProjects.length/2)) ? (
            <S.ProjectCard key={project.slug} className="portfolio-item">
              <Link href={`project/${project.slug}`}>
                <Image
                  src={project.mediaCollection.items[0].url}
                  alt="Project thumb"
                  height={350}
                  width={600}
                  priority
                  className="portfolio-thumb"
                />
              </Link>
            </S.ProjectCard>
            ) : null
          ))}
        </S.ProjectsGallery>
        </Col_6>
        <Col_6>
        <S.ProjectsGallery>
          {allProjects.map((project, index) => (
            (index < (allProjects.length/2)) ? (
            <S.ProjectCard key={project.slug} className="portfolio-item">
              <Link href={`project/${project.slug}`}>
                <Image
                  src={project.mediaCollection.items[0].url}
                  alt="Project thumb"
                  height={350}
                  width={600}
                  priority
                  className="portfolio-thumb"
                />
              </Link>
            </S.ProjectCard>
            ) : null
          ))}
        </S.ProjectsGallery>
        </Col_6>
      </Row>
    </div>
  );
}
