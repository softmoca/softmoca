import { getAllPosts } from "@/app/api/posts";
import PostsGrid from "./PostGrid";

export default async function FeaturedPosts() {
  const posts = await getAllPosts();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
