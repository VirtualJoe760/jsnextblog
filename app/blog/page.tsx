import { BlogPosts } from "app/components/posts";
import Head from "next/head";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.datalayer = window.datalayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
          Joe's News
        </h1>
        <BlogPosts />
      </section>
    </>
  );
}
