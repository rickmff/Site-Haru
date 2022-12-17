import Layout from "../components/Layout";
import { getAllProjectsForHome } from "../config/api";

export default function Portfolio({ allProjects }) {
  return <Layout></Layout>;
}

export async function getStaticProps() {
  const allProjects = (await getAllProjectsForHome()) ?? [];
  return {
    props: { allProjects },
    revalidate: 10,
  };
}
