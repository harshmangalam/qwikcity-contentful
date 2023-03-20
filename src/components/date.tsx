import { component$ } from "@builder.io/qwik";

export const DateComponent = component$(({ date }: { date: string }) => {
  return <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>;
});
