// components/project.tsx
import Link from 'next/link';
import  Image from 'next/image';

type ProjectCardProps = {
  imageSrc: string;
  title: string;
  tag?: string;
  description: string;
  link: string; // Optional link prop
};

export default function ProjectCard({ imageSrc, title, tag, description,link }: ProjectCardProps) {
  console.log('link prop:', link); // Debugging line to check the link prop
  return (
     <Link href={link || '/test'} passHref>
    <div className="bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 cursor-pointer rounded-lg p-6 flex items-center space-x-6">
      <Image
  src={imageSrc}
  alt={title}
  width={160}
  height={90}
  className="object-contain"
/>

      
      <div>
        <div className="flex items-center space-x-3">
          <h2 className="text-xl font-bold">{title}</h2>
          {tag && (
            <span className="bg-black text-white text-xs px-2 py-1 rounded">
              {tag}
            </span>
          )}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
      </Link>
    
  );
}
