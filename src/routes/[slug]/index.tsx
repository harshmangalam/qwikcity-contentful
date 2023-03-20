import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { PostHeader } from "./post-header";

export default component$(() => {
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

export const getPost = routeLoader$(({ params }) => {});
