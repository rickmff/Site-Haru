import Link from "next/link";

export default function GalleryOfProjects({ allProjects }) {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {allProjects.map((project) => (
          <li key={project.slug}>
            <Link href={`project/${project.slug}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
