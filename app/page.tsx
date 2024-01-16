import { Button } from "@/components/ui/button";
import { simpleBlogCard } from "./lib/interface";
import { UrlFor, sanityClient } from "./lib/sanity";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `
  *[_type=='blog']| order(_createdAt desc){
    title, 
    author,
    category,
    date,
    smallDescription,
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
      {data.map((post, idx) => (
        <Card key={idx}>
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
                  <div>{post.smallDescription}</div>
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
  );
}
