import { getPostsBySlug, getPosts } from "@/app/lib/posts";
import { notFound } from "next/navigation";

type blogPostParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => {
    return { slug: post.slug };
  });
}

export default function Page({ params }: blogPostParams) {
  const post = getPostsBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Page slug: {params.slug}</p>
      <p>{post.content}</p>
    </div>
  );
}
