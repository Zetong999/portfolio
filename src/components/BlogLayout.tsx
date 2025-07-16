import React from 'react'
// import TestimonialReadMore from './TestimonialReadMore'
import { BlogContent } from './BlogContent'



interface BlogLayoutProps {
    post: {
      author: string;
      authorAvatar: string;
      content: string;
      dateTime: string;
      description: string;
      image: string;
      title: string;
    } | any
  }

export const BlogLayout: React.FC<BlogLayoutProps> = ({ post }) => {
    // const currentTitle = post.title
  


    return (
        <div className={`marginTop500 marginBottom100`}>
            <BlogContent
                content={post.content}
                // author={post.author}
                // authorAvatar={post.authorAvatar}
                // dateTime={post.dateTime}
            />
            {/* {morePosts.length > 0 && <TestimonialReadMore posts={morePosts} />} */}

         
        </div>
    )
}


