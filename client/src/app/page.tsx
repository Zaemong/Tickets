import { api } from "@/app/_trpc/server";

export default async function Home() {
  // const allPosts = await api.posts.getAllPosts()
  const allPosts = await api.posts.getAllPosts()

  return (
    <>
    {/* {allPosts.data?.map((post) => (
      <p key={post.id}>{post.title}</p>
    ))} */}
    {String(allPosts)}
    </>
  );
}
