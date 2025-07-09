export const API_URL = 'https://zetongportfolio.com/graphql'

const fetchAPI = async (query: string, variables: Record<string, any> = {}) => {
    const headers = { 'Content-Type': 'application/json' }

    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables }),
         next: { revalidate: 3600 }
    })

    const json = await res.json()
    //console.log('json', json)
    if (json.errors) {
        console.error(`kkk`,json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.data
}
export const getBlogForHome = async () => {
    try {
        const data = await fetchAPI(
            `
           query AllArticles {
  posts(
    first: 3
    where: {categoryName: "blog", orderby: {field: DATE, order: DESC}}
  ) {
    edges {
      node {
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        id
        dateGmt
        title
        tags {
          nodes {
            name
          }
        }
        seo {
          metaDesc
        }
      }
    }
  }
}
            `
        )
        return data?.posts
    } catch (e) {
        console.log('Error', e)
        return {}
    }
}

const endpoint = 'https://zetongportfolio.com/graphql';

export async function getPostBySlug(slug: string) {



  const query = `
    query FindSlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        featuredImage {
          node {
            sourceUrl
          }
        }
        seo {
          title
          metaDesc
          opengraphSiteName
          opengraphTitle
          opengraphType
          opengraphDescription
          opengraphImage {
            mediaItemUrl
            altText
            mediaDetails {
              height
              width
            }
          }
        }
        author {
          node {
            avatar {
              url
            }
            name
          }
        }
        postFormats {
          nodes {
            name
          }
        }
        id
        slug
        content
        dateGmt
        title
      }
    }
  `;

  const variables = {
    slug: slug,
  };

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 3600 }, // 可选，启用 ISR
  });

  const json = await res.json();
  return json.data.post;
}