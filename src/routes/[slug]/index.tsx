import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import contentfulFetch from "~/lib/contentful-fetch";
import { PostBody } from "./post-body";
import { PostHeader } from "./post-header";

export default component$(() => {
  const postSignal = getPost();
  const post = postSignal.value;
  return (
    <article>
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
      />
      <PostBody content={post.content} />
    </article>
  );
});

export const getPost = routeLoader$(async ({ params, fail }) => {
  const query = `query {
    postCollection(where:{slug:"${params.slug}"}) {
     items {
      title
      coverImage {
        url
      }
      date
      
      content {
        json
       
      }
      
    } 
    }
  }`;

  try {
    const response = await contentfulFetch(query);
    const data = await response.json();

    if (response.ok) {
      return data.data.postCollection.items[0];
    }
    return fail(response.status, {
      message: response.statusText,
    });
  } catch (error) {
    return fail(500, {
      message: "Something went wrongs",
    });
  }
});
