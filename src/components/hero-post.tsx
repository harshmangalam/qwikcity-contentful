import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Avatar } from "./avatar";
import { CoverImage } from "./cover-image";
import { DateComponent } from "./date";

export default component$(
  ({ title, coverImage, date, excerpt, author, slug }: any) => {
    return (
      <section>
        <div class="mb-8 md:mb-16">
          <CoverImage title={title} slug={slug} url={coverImage.url} />
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <div>
            <h3 class="mb-4 text-4xl lg:text-6xl leading-tight">
              <Link href={`/${slug}`} class="hover:underline">
                {title}
              </Link>
            </h3>
            <div class="mb-4 md:mb-0 text-lg">
              <DateComponent date={date} />
            </div>
          </div>
          <div>
            <p class="text-lg leading-relaxed mb-4">{excerpt}</p>
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
        </div>
      </section>
    );
  }
);
