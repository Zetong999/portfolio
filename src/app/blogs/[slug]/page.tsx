import { getPostBySlug } from '@/graphqlApi'
import { console } from 'inspector'
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  console.log('slug', slug)
    const blogPostData = await getPostBySlug(slug)
    console.log('blogPostData', blogPostData)

  return <div>My Post:
    <div
     //  className={`${styles.content} ${classes.content}`}
          dangerouslySetInnerHTML={{ __html: blogPostData.content || '' }}/>
     </div>
}