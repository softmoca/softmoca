import { Metadata } from "next";
import { getAllPosts } from "../api/posts";
import FilterablePosts from "@/components/FilterablePosts";

export const metadata: Metadata = {
  title: "All Posts",
  description: "풀스택 관련 블로그 글",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
