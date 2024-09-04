import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()

  const post = allPosts.find((post) => post._meta.path === router.query.slug);
  if (!post) {
    return notFound();
  }

  return (
    <article className="space-y-4 max-w-[65ch]">
      <header>
        <h2 className="text-3xl font-semibold">{post.title}</h2>
      </header>
      <div className="mt-4 prose max-w-full">
        <MDXContent code={post.code} />
      </div>
      <footer className="flex justify-between items-center">
        <p className="text-sm text-gray-500">By {post.author}</p>
        <p className="mt-4">{post.date}</p>
      </footer>
    </article>
  );
}
