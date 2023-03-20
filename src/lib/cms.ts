import {createClient} from "contentful"

export const client = createClient({
    accessToken:import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    space:import.meta.env.VITE_CONTENTFUL_SPACE_ID
})