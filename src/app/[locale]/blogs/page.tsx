import BlogCard from '@/components/blog';
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
    
    description:
      'Comparison of different memory types in LangChain for better conversational AI experiences.',
    tags: ['AI', 'LLM', 'LangChain'],
    link: '/blogs/langchain',
  },
  {
    imageSrc: '/cat4.png',
    title: 'Good Bye MKDocs, Hello Astro',
    tag: 'Coming Soon!',
    description:
      'Migrating documentation from MKDocs to Astro for better performance and flexibility.',
    tags: [],
    link: '/blogs/goodbye',
  },
  {
    imageSrc: '/cat5.png',
    title: 'My AI Journey: From College to LLM Community',
    
    description:
      'Sharing my journey learning AI, from university projects to joining the LLM open source community.',
    tags: ['AI', 'LLM', 'Biography'],
    link: '/blogs/journey',
  },
  {
    imageSrc: '/cat6.png',
    title: 'Build a Digital Signage with Magic Mirror',
    
    description:
      'Learn how to build a smart digital signage using MagicMirror and a spare monitor.',
    tags: ['Digital Signage', 'Happy Share', 'MagicMirror'],
    link: '/blogs/build',
  },
];
export default function BlogPage() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      
        <div className="space-y-6">
            {blogs.map((blog, index) => (
                
                <div key={index}>
             <BlogCard {...blog} />
            <hr className="hs-divider my-4 border-t-3 border-gray-300" /> {/* ✅ 每个 BlogCard 下方都有 */}
          </div>
        ))}
      </div>
    </div>
  );
}