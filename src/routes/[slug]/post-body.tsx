import { component$ } from "@builder.io/qwik";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export const PostBody = component$(
  ({ content }: { content: { json: any } }) => {
    return (
      <div
        class="max-w-2xl mx-auto"
        dangerouslySetInnerHTML={documentToHtmlString(content.json)}
      ></div>
    );
  }
);
