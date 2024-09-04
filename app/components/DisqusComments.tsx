import { DiscussionEmbed } from "disqus-react";
import React from "react";

const DisqusComments = () => {
  return (
    <DiscussionEmbed
      shortname="speakupjoe"
      config={{
        url: this.props.article.url,
        identifier: this.props.article.id,
        title: this.props.article.title,
        language: "en-us", 
      }}
    />
  );
};

export default DisqusComments;
