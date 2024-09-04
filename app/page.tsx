import { allPosts } from "content-collections";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className="text-2xl font-semibold">Posts</h2>
      <ul className="mt-4 max-w-4xl space-y-4">
        {allPosts.map((post) => (
          <li key={post._meta.path}>
            <article className="border-2 p-2 rounded-lg shadow-md hover:bg-teal-50 hover:border-teal-500">
              <Link href={`/posts/${post._meta.path}`}>
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p>{post.summary}</p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
