

const contentfulFetch = async (query:string) => {
  const url = 'https://graphql.contentful.com/content/v1/spaces/' + import.meta.env.VITE_CONTENTFUL_SPACE_ID

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query }),
  })

  return response
}

export default contentfulFetch