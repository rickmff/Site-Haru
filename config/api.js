const PROJECT_GRAPHQL_FIELDS = `
  slug
  title
  mediaCollection {
    items {
      url
    }
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractProject(fetchResponse) {
  return fetchResponse?.data?.projectCollection?.items?.[0];
}

function extractProjectEntries(fetchResponse) {
  return fetchResponse?.data?.projectCollection?.items;
}

export async function getPreviewProjectBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      projectCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractProject(entry);
}

export async function getAllProjectsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      projectCollection {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractProjectEntries(entries);
}

export async function getAllProjectsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      projectCollection {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractProjectEntries(entries);
}

export async function getProjectAndMoreProjects(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      projectCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      projectCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 2) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    project: extractProject(entry),
    moreProjects: extractProjectEntries(entries),
  };
}
