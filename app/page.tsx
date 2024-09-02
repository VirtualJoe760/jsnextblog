import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Speak Up Joe!
      </h1>
      <p className="mb-4">
        {`Hello I'm Joe, I'm a software engineer, entrepreneur, marketing mind with political opinions. I plan to use this blog to simply exprees my points of view, learning experiences & thoughts with the internet.
        I will be posting everything from code tutorials to thoughts on politics here so let me say it here first, I'm not trying to please everyone, this blog is really just for my own purposes. I will be using it as a journal, 
        an escape, and notes for learning. I decided to create this blog going through code tutorials. Its one thing to code along on videos, Its another thing to document the experience as you go and take good notes. I've never been
        one to have a photographic super genius memory. I've worked hard to learn everything I know and do my best to consider all opinions and paths forward. All this being said, if you are someone who is following this blog,
        saw this on my developer portfolio, or on social media, I hope you enjoy my content here and that it benefits you. Thanks for stopping by!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
