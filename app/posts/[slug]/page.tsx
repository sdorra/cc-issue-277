import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import { MDXContent } from "@content-collections/mdx/react";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export default function Post({ params: { slug } }: Props) {
  const post = allPosts.find((post) => post._meta.path === slug);
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

export function generateMetadata({ params: { slug } }: Props): Metadata {
  const post = allPosts.find((post) => post._meta.path === slug);
  if (!post) {
    return notFound();
  }

  return {
    title: post.title,
    description: post.summary,
  };
}
