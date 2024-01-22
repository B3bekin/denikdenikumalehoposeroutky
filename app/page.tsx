import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { UrlFor, sanityClient } from "./lib/sanity";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type=='blog']| order(_createdAt desc){
    title, 
    author,
    category,
    date,
    "currentSlug": slug.current,
    titleImage
  }`;

  const data = await sanityClient.fetch(query);

  return data;
}
export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  //console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 items-center gap-5 my-10">
      <div className="text-center">ne</div>
      <div className="grid grid-cols-2 gap-5 my-10">
        {data.map((post, id) => (
          <Card key={id}>
            <Image
              src={UrlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />
            <CardContent>
              <div className="flex justify-between flex-col sm:flex-row">
                <div className="">
                  <h1 className="text-2xl font-bold hover:cursor-pointer">
                    {post.title}
                  </h1>
                  <div className="text-gray-500 flex flex-row gap-5">
                    <div className="hover:underline hover:cursor-pointer">
                      {post.category}
                    </div>
                    <div className="hover:underline hover:cursor-pointer">
                      {post.date}
                    </div>
                  </div>
                  <div className="hover:underline hover:cursor-pointer">
                    {post.author}
                  </div>
                </div>
                <div className="pt-5 sm:pt-2">
                  <Button asChild>
                    <Link href={"/blog/${post.currentSlug}"}>Read more</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

      </div>


    </div>
  );
}
