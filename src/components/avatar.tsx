import { component$ } from "@builder.io/qwik";

interface AvatarProps {
  picture: {
    url: string;
  };
  name: string;
}
export const Avatar = component$(({ picture, name }: AvatarProps) => (
  <div class="flex items-center">
    <div class="relative w-12 h-12 mr-4">
      <img src={picture.url} class="rounded-full" alt={name} />
    </div>
    <div class="text-xl font-bold">{name}</div>
  </div>
));
