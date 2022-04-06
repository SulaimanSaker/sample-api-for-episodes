import React from "react";

import NextLink from "next/link";

const Link = ({ href, className, children }) => {
  return (
    <NextLink href={href} passHref>
      <a href="/" className={className}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
