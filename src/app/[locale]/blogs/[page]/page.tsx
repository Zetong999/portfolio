import BlogCard from "@/components/blog";
import CustomPager from "@/components/CustomPager";
import { getAllNewsArticles, getAllNewsArticleSlugs, POSTS_PER_PAGE } from "@/graphqlApi";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  let next = '';
  let totalPages = 1;
  let hasNext = true;

  while (hasNext) {
    const wpData = await getAllNewsArticleSlugs(POSTS_PER_PAGE, next);
    if (wpData?.pageInfo?.hasNextPage) {
      totalPages++;
      next = wpData?.pageInfo?.endCursor;
    } else {
      hasNext = false;
    }
  }

  const paths = [];
  for (let i = 1; i <= totalPages; i++) {
    paths.push({ page: i.toString() });
  }

  return paths;
}



export default async function NewsPage({ params }: { params: any }) {
  // let page = 1;
  let { page } = await params
  try {
    page = parseInt(page);
    if (isNaN(page) || page < 1) throw new Error();
  } catch {
    notFound();
  }

  let next = '';
  let hasNext = true;
  let articleListData = [];
  let totalPages = 1;

  while (hasNext) {
    let wpData;
    if (totalPages === page) {
      wpData = await getAllNewsArticles(POSTS_PER_PAGE, next);
      articleListData = wpData.edges;
    } else {
      wpData = await getAllNewsArticleSlugs(POSTS_PER_PAGE, next);
    }

    if (wpData?.pageInfo?.hasNextPage) {
      next = wpData?.pageInfo?.endCursor;
      totalPages++;

    } else {
      hasNext = false;
    }
  }

  if (page > totalPages) {
    notFound();
  }



  const mainBlogs = articleListData?.map(({ node }: any) => ({
    imageSrc: node.featuredImage?.node?.sourceUrl ?? '/default-image.png',
    title: node.title,
    tag: node.tags?.nodes?.[0]?.name ?? '',
    description: node.seo?.metaDesc ?? '',
    link: `/blogs/article/${node.slug}`,
  }));



  return <div className="grid grid-cols-6 gap-4">
     <section className="col-span-4  col-start-2">

    <p className="text-3xl font-bold mx-auto mt-[30px] mb-[20px]" >Blog</p>
    <div >


      
        <div className="flex flex-col">
          {mainBlogs?.map((blog: any, index: number) => (
            <div key={index}>
              <BlogCard

                imageSrc={blog.imageSrc}
                title={blog.title}
                tag={blog.tag}
                description={blog.description}
                tags={blog.tags}
                link={blog.link}
              />
              {index !== mainBlogs.length - 1 && (

                <hr className="border-gray-300 my-6" />
              )}
            </div>
          ))}

          <CustomPager link={`/blogs`} currentPage={page} totalPages={totalPages} />
        </div>
      





    </div>
  </section>
  </div>
  
 




}