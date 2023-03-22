import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import HeroPost from "~/components/hero-post";
import { MoreStories } from "~/components/more-stories";
import contentfulFetch from "~/lib/contentful-fetch";

export default component$(() => {
  const postsSignal = getPosts();
  const posts = postsSignal.value?.items;
  const heroPost = posts?.length && posts[0];
  return (
    <div>
      <section>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
      </section>

      <section>{posts.length > 0 && <MoreStories posts={posts} />}</section>
    </div>
  );
});

export const getPosts = routeLoader$(async ({ fail }) => {
  const query = `
  query {
    postCollection {
      items {
        slug
        title
        date
        coverImage {
          url
        }
        
      }
    }
  }
  `;
  try {
    const response = await contentfulFetch(query);
    const data = await response.json();
    if (response.ok) {
      return data.data.postCollection;
    }
    return fail(response.status, {
      message: response.statusText,
    });
  } catch (error) {
    console.log(error);
    return fail(500, {
      message: "Internal server error",
    });
  }
});
