import ProjectCard from '@/components/project';
import BlogCard from '@/components/blog';

export default function Home() {
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

  const blogs = [
    {
      imageSrc: '/cat1.png',
      title: 'Debug Linux With Systemctl',
      tag: 'Latest',
      description: 'Debugging issues with systemctl on Arch Linux.',
      tags: ['Arch Linux', 'Happy Share'],
      link: '/blogs/debug',
    },
    {
      imageSrc: '/cat2.png',
      title: 'Secure your Arch Linux with Wazuh',
      
      description: 'Secure your Arch Linux system with Wazuh, a free, open-source security monitoring platform.',
      tags: ['Happy Share', 'Arch Linux'],
      link: '/blogs/secure',
    },
    {
      imageSrc: '/cat3.png',
      title: 'LangChain Conversational Memory Comparison',
     
      description: 'Comparison of different memory types in LangChain for better conversational AI experiences.',
      tags: ['AI', 'LLM', 'LangChain'],
      link: '/blogs/langchain',
    },
  ];

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
        {blogs.map((blog, index) => (
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

    