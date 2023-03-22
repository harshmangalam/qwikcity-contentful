import { component$ } from "@builder.io/qwik";
import { Avatar } from "~/components/avatar";
import { CoverImage } from "~/components/cover-image";
import { DateComponent } from "~/components/date";
import { PostTitle } from "./post-title";

interface PostHeaderProps {
  title: string;
  coverImage: {
    url: string;
  };
  date: string;
  author: {
    name: string;
    picture: any;
  };
}
export const PostHeader = component$(
  ({ title, coverImage, date, author }: PostHeaderProps) => (
    <>
      <PostTitle>{title}</PostTitle>
      <div class="hidden md:block md:mb-12">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      {coverImage && (
        <div class="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} url={coverImage.url} />
        </div>
      )}
      <div class="max-w-2xl mx-auto">
        <div class="block md:hidden mb-6">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div class="mb-6 text-lg">
          <DateComponent date={date} />
        </div>
      </div>
    </>
  )
);
