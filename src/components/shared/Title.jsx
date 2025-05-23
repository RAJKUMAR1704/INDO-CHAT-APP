import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Indo Chat",
  description = "this is the Chat App called Indo Chat",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
