import { simpleBlogCard } from './lib/interface';
import { UrlFor, sanityClient } from './lib/sanity';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

async function getData() {
  const query = `
  *[_type=='blog']| order(_createdAt desc){
    title, 
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
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image src={UrlFor(post.titleImage).url()} alt="images" width={500} height={500} className='rounded-t-lg h-[200px] object-cover' />
          <CardContent>
            <h1 className='text-2xl font-bold'>{post.title}</h1>
            <div>{post.smallDescription}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
