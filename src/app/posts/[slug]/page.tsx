import { getPostData } from "@/app/api/posts";
import MarkdownViewer from "@/components/MarkdownViewer";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;

  return (
    <div>
      {post.title}
      <MarkdownViewer content={post.content}></MarkdownViewer>
    </div>
  );
}
