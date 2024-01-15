import { createClient } from "next-sanity";

export const sanityClient = createClient({
    projectId: "6atja9lt",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false,
});

