import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <main class="max-w-6xl mx-auto">
        <Slot />
      </main>
    </div>
  );
});
