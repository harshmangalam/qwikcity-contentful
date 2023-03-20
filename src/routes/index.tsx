import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import contentfulFetch from "~/lib/contentful-fetch";

export default component$(() => {
  const postsSignal = getPosts();
  return <pre>{JSON.stringify(postsSignal.value, null, 4)}</pre>;
});

export const getPosts = routeLoader$(async ({ fail }) => {
  const query = `
  query {
    postCollection {
      items {
        title
      }
    }
  }
  `;
  try {
    const response = await contentfulFetch(query);
    const data = await response.json();
    return data;
  } catch (error) {
    return fail(500, {
      message: "Internal server error",
    });
  }
});
