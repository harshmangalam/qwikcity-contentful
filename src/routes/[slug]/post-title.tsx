import { component$, Slot } from "@builder.io/qwik";

export const PostTitle = component$(() => (
  <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
    <Slot />
  </h1>
));
