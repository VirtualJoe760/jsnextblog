import { BlogPosts } from "app/components/posts";
import Head from "next/head";

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
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Speak Up Joe!
        </h1>
        <p className="mb-4">
          {`Hello I'm Joe, I'm a software engineer, entrepreneur, marketing mind with political opinions. I plan to use this blog to simply exprees my points of view, learning experiences & thoughts with the internet.
        I will be posting everything from code tutorials to thoughts on politics here so let me say it here first, I'm not trying to please everyone, this blog is really just for my own purposes. I will be using it as a journal, 
        an escape, and notes for learning. I decided to create this blog to journal going through code tutorials and my thoughts on politics. To those who are following this blog,
        I hope you enjoy my content here and that it benefits you. Thanks for stopping by!`}
        </p>
        <div className="my-8">
          <BlogPosts />
        </div>
      </section>
    </>
  );
}
