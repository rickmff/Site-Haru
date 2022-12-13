import Head from "next/head";
import Menu from "../components/Menu";
import SideBarMenu from "../components/SideBarMenu";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import GalleryOfProjects from "../components/GalleryOfProjects";
import { getAllProjectsForHome } from "../config/api";

export default function Home({ preview, allProjects }) {
  return (
    <>
      <Head />
      <Menu />
      <SideBarMenu />
      <Hero />
      <Layout preview={preview}>
        <GalleryOfProjects allProjects={allProjects} />
      </Layout>
    </>
  );
}

export async function getStaticProps({preview = false}) {
  const allProjects = (await getAllProjectsForHome(preview)) ?? [];
  return {
    props: { preview, allProjects },
  };
}
