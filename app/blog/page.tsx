import { BlogPosts } from "app/components/posts";
import Head from "next/head";


export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <>
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
          Joe's News
        </h1>
        <BlogPosts />
      </section>
    </>
  );
}
