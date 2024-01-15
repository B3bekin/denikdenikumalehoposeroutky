import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
    projectId: "6atja9lt",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false,
});

const builder = imageUrlBuilder();

export function UrlFor(source: any) {
    return builder.image(source);
};