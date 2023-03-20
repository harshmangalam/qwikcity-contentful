import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { client } from "~/lib/cms";

export const useServerTimeLoader = routeLoader$(async () => {
  const data = await client.getEntries();
  console.log(data);
});

export default component$(() => {
  return (
    <div>
      <main>
        <Slot />
      </main>
    </div>
  );
});
