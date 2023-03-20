import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface CoverImageProps {
  title: string;
  url: string;
  slug?: string;
}
export const CoverImage = component$(
  ({ title, url, slug }: CoverImageProps) => {
    return (
      <div class="sm:mx-0">
        {slug ? (
          <Link href={`/posts/${slug}`} aria-label={title}>
            <img
              width={2000}
              height={1000}
              alt={`Cover Image for ${title}`}
              class={`shadow-small ${
                slug ? "hover:shadow-medium transition-shadow duration-200" : ""
              }
              `}
              src={url}
            />
          </Link>
        ) : (
          <img
            width={2000}
            height={1000}
            alt={`Cover Image for ${title}`}
            class={`shadow-small ${
              slug ? "hover:shadow-medium transition-shadow duration-200" : ""
            }
            `}
            src={url}
          />
        )}
      </div>
    );
  }
);
