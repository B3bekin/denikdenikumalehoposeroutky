import { FirstBlogCard } from './lib/interface';
import { sanityClient } from './lib/sanity';

async function getData() {
  const query = `
  *[_type=='blog']| order(_createdAt desc)[0]{
    title, titleImage, author, date, category, smallDescription,
    "currentSlug": slug.current 
  }`;

  const data = await sanityClient.fetch(query);

  return data;
}


export default async function Home() {
  const data: FirstBlogCard[] = await getData();

  //console.log(data);

  return (
    <div>
      {/* <div className='grid grid-cols-1 md:grid-cols-2 bg-pink-400'>
        {data.map((blog) =>
          <div className='bg-pink-400'>
            <img src={blog.titleImage} alt='' />
            <h1>{blog.title}</h1>
            <h2>{blog.author}</h2>
            <h3>{blog.date}</h3>
            <h4>{blog.category}</h4>
            <p>{blog.smallDescription}</p>
          </div>
        )}
      </div> */}
    </div>
  )
}
