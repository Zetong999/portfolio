import Image from 'next/image';

type BlogCardProps = {
  imageSrc: string;
  title: string;
  tag?: string;
  description: string;
  tags: string[]; // tags prop
};

export default function BlogCard({ imageSrc, title, tag, description, tags }: BlogCardProps) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 cursor-pointer rounded-lg p-6 flex items-center space-x-6 border-b border-gray-200 last:border-b">
      <Image
        src={imageSrc}
        alt={title}
        width={200}
        height={150}
        className="object-cover rounded-lg"
      />

      <div className="flex-1">
        <div className="flex items-center space-x-3">
          <h2 className="text-xl font-bold">{title}</h2>
          {tag && (
            <span className="bg-black text-white text-xs px-2 py-1 rounded">
              {tag}
            </span>
          )}
        </div>

        <p className="text-gray-600">{description}</p>

        <div className="flex justify-end space-x-2 mt-4">
          {tags.map((tagItem, index) => (
            <button
              key={index}
              className="border px-2 py-1 rounded"
            >
              {tagItem}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
