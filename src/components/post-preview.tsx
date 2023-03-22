import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Avatar } from "./avatar";
import { CoverImage } from "./cover-image";
import { DateComponent } from "./date";

interface PostPreviewProps {
  title: string;
  coverImage: {
    url: string;
  };
  date: string;
  excerpt: string;
  author: {
    name: string;
    picture: {
      url: string;
    };
  };
  slug: string;
}
export const PostPreview = component$(
  ({ title, coverImage, date, excerpt, author, slug }: PostPreviewProps) => (
    <div>
      <div class="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 class="text-3xl mb-3 leading-snug">
        <Link href={`/${slug}`} class="hover:underline">
          {title}
        </Link>
      </h3>
      <div class="text-lg mb-4">
        <DateComponent date={date} />
      </div>
      <p class="text-lg leading-relaxed mb-4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
);
