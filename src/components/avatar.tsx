import { component$ } from "@builder.io/qwik";

export const Avatar = component$(({ picture, name }) => (
  <div class="flex items-center">
    <div class="relative w-12 h-12 mr-4">
      <ContentfulImage
        src={picture.url}
        layout="fill"
        class="rounded-full"
        alt={name}
      />
    </div>
    <div class="text-xl font-bold">{name}</div>
  </div>
));
