import { sanityClient } from "@/app/lib/sanity";
import { fullBlogCard } from "@/app/lib/interface";
import Image from "next/image";
import { UrlFor } from "@/app/lib/sanity";

async function getData(slug: String) {
  const query = `*[_type == "blog" && slug.current == '${slug}']{
    "currentSlug":slug.current,
    title,
    content,
    titleImage,
    }[0]`;

  const data = await sanityClient.fetch(query);
  return data;
}

async function blogArticle({ params }: { params: { slug: string } }) {
  const data: fullBlogCard = await getData(params.slug);

  return (
    <div>
      <Image
        src={UrlFor(data.titleImage).url()}
        width={500}
        height={500}
        alt="title Image"
      />
    </div>
  );
}

export default blogArticle;
