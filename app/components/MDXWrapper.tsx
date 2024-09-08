// components/MDXWrapper.tsx
"use client"; // Mark this file as a Client Component

import { MDXProvider } from '@mdx-js/react';
import TweetEmbed from './TweetEmbed';

const components = {
  TweetEmbed,
};

export default function MDXWrapper({ children }) {
  console.log("MDXWrapper rendered with TweetEmbed component.", components);
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  );
}
