import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getAllProjectsWithSlug, getProjectAndMoreProjects } from "../../config/api";

export default function Project({ project }) {
  const router = useRouter();

  if (!router.isFallback && !project) {
    return <ErrorPage statusCode={404} />;
  }

  return <>Pudim de beterraba</>;
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getProjectAndMoreProjects(params.slug, preview);

  return {
    props: {
      preview,
      project: data?.project ?? null,
      moreProjects: data?.moreProjects ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allProjects = await getAllProjectsWithSlug();
  return {
    paths: allProjects?.map(({ slug }) => `/project/${slug}`) ?? [],
    fallback: true,
  };
}
