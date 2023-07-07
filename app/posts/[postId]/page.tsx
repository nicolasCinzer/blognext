import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getSortedPostsData } from '@nzc/lib/posts'
import { getPostData } from '@nzc/lib/posts'
import getFormattedDate from '@nzc/lib/getFormattedDate'

type Props = {
  params: {
    postId: string
  }
}

export function generateMetadata({ params: { postId } }: Props): Metadata {
  const posts = getSortedPostsData()

  const { title, id } = posts.filter(post => post.id === postId)[0]

  if (!title) {
    return { title: 'Post Not Found' }
  }

  return { title: title }
}

export default async function Post({ params: { postId } }: Props) {
  const posts = getSortedPostsData()

  if (!posts.find(post => post.id === postId)) {
    notFound()
  }

  const { date, title, contentHTML } = await getPostData(postId)
  const pubDate = getFormattedDate(date)

  return (
    <main className='px-6 prose prose-xl prose-slate mx-auto'>
      <h1>{title}</h1>
      <p>{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHTML }} />
        <p>
          <Link href={'/'}>Home</Link>
        </p>
      </article>
    </main>
  )
}

export async function generateStaticParams() {
  const BlogPosts: BlogPost[] = getSortedPostsData()

  return BlogPosts.map(blog => ({ postId: blog.id.toString() }))
}
