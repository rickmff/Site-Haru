import Image from "next/image";
import Link from "next/link";

export default function GalleryOfProjects({ allProjects }) {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {allProjects.map((project) => (
          <li key={project.slug}>
            <Link href={`project/${project.slug}`}>
              <Image
                src={project.mediaCollection.items[0].url}
                alt="Project thumb"
                height={100}
                width={100}
                priority
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
