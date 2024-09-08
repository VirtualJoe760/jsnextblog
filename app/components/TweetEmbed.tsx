"use client";
import { Tweet } from 'react-tweet';

interface TweetProps {
  id: string;
}

const TweetEmbed = ({ id }: TweetProps) => {
  console.log("Rendering TweetEmbed with id: ", id); // Debugging statement
  return <Tweet id={id} />;
};

export default TweetEmbed;