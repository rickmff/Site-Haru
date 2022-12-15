import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";

export default function GalleryOfProjects({ allProjects }) {
  return (
    <div>
      <h1>Projects</h1>
      <S.ProjectsGallery>
        {allProjects.map((project) => (
          <S.ProjectCard key={project.slug} className="portfolio-item">
            <Link href={`project/${project.slug}`}>
              <Image
                src={project.mediaCollection.items[0].url}
                alt="Project thumb"
                height={400}
                width={700}
                priority
                className="portfolio-thumb"
              />
            </Link>
          </S.ProjectCard>
        ))}
      </S.ProjectsGallery>
    </div>
  );
}
