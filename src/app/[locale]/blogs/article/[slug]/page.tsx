// import BlogHeader from '@/components/BlogHeader'
import { BlogLayout } from '@/components/BlogLayout'
import { getPostBySlug } from '@/graphqlApi'

 const getPostDescription = (node: any) => {
  const content = node.content ?? ''
  const descLine = /<p>case_description:.*?(.*?)<\/p>/i.exec(content)
  return descLine ? descLine[1] : ''
}

const DEFAULT_IMG = '/broken_image.jpg'

const getPostImage = (node: any) => {
  try {
      const image = node.featuredImage?.node?.sourceUrl || DEFAULT_IMG
      return encodeURI(image)
  } catch (e) {
      console.log('Error', e)
      // default image
      return DEFAULT_IMG
  }
}

const getPostAuthor = (node: any) => {
  try {
      return node.author?.node?.name || 'Nobody'
  } catch (e) {
      console.log('Error', e)
      return ''
  }
}

const getPostAuthorAvatar = (node: any) => {
  try {
      return node.author?.node?.avatar?.url || DEFAULT_IMG
  } catch (e) {
      console.log('Error', e)
      return DEFAULT_IMG
  }
}


const filterPost = (post: any) => {
  if (post) {
      const postDetails = post.content ?? ''
      const contentSplitter = postDetails.indexOf('<hr />')
      const content = contentSplitter !== -1 ? postDetails.slice(contentSplitter + 6) : postDetails

      const title = post.title
      const description = getPostDescription(post)
      const image = getPostImage(post)
      const author = getPostAuthor(post)
      const authorAvatar = getPostAuthorAvatar(post)
      const dateTime = post.dateGmt

      // return {}
      return {content, title, description, image, author, authorAvatar, dateTime}
  } else {
      return {}
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
    const blogPostData = await getPostBySlug(slug)
    let postInfo = {}
    if (!!blogPostData && blogPostData.id) {
      postInfo = filterPost(blogPostData)
     
  }


  return <div>  
  {/* <BlogHeader title={blogPostData.title} description={blogPostData.seo.metaDesc} image={blogPostData.featuredImage.node.sourceUrl || `broken_image.jpg`}/> */}
      <BlogLayout post={postInfo}/>

     </div>
}