import Hero from "../components/Hero";
import Layout from "../components/Layout";
import GalleryOfProjects from "../components/GalleryOfProjects";
import { getAllProjectsForHome } from "../config/api";

export default function Home({ allProjects }) {
  return (
    <>
      <Layout>
        <Hero />
        <GalleryOfProjects allProjects={allProjects} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = (await getAllProjectsForHome()) ?? [];
  return {
    props: { allProjects },
    revalidate: 10,
  };
}
