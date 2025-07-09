import ProjectCard from '@/components/project';
import BlogCard from '@/components/blog';

export default function Home({blogData}: {blogData: any}) {
  const projects = [
    {
      imageSrc: '/envex-logo.png',
      title: 'EnvEx',
      tag: 'NEW',
      description: 'Dotenv sample made easy!',
      link: '/projects/envex',
    },
    {
      imageSrc: '/fingervein-logo.png',
      title: 'FingerVeinApp',
      tag: '',
      description: 'Machine Learning Finger Vein Authentication System',
      link: '/projects/fingervin',
    },
  ];

  const blogs = blogData?.edges?.map(({ node }: any) => ({
    imageSrc: node.featuredImage?.node?.sourceUrl ?? '/default-image.png',
    title: node.title,
    tag: node.tags?.nodes?.[0]?.name ?? '',
    description: node.seo?.metaDesc ?? '',
    link: `/blogs/${node.slug}`,
  }));

  console.log('blogsblogsblogs', blogs)

  return (
    <div className= "mt-10 ">
      <section>
      <h2 className="text-2xl font-bold mb-4">Latest Projects &lt;/&gt;</h2>
      <div className="space-y-6 mb-10">
        {projects.map((project, index) => (
            <div key={index}>
          <ProjectCard
           
            imageSrc={project.imageSrc}
            title={project.title}
            tag={project.tag}
            description={project.description}
            link={project.link}
          />
          {index !== projects.length - 1 && (
          <hr className="border-gray-300 my-6" />
          )}
          </div>
          ))}
      
      </div>
       
</section>
      <h2 className="text-2xl font-bold mb-6">Latest Blog Posts</h2>
      <div className="space-y-6">
        {blogs.map((blog: any, index: number) => (
            <div key={index}>
          <BlogCard
            
            imageSrc={blog.imageSrc}
            title={blog.title}
            tag={blog.tag}
            description={blog.description}
            tags={blog.tags}
            link={blog.link}
          />
          {index !== blogs.length - 1 && (

            <hr className="border-gray-300 my-6" />
          )}
          </div>
        ))}
      </div>
      
</div>
);
}

    