import React, { useState, useEffect } from "react";

import { FacebookShareButton, TwitterShareButton } from "react-share";

import { FaFacebookF, FaTwitter, FaInstagram, FaBehance, FaYoutube } from "react-icons/fa";

import { HiOutlineShare } from "react-icons/hi";

import { Link } from "components/atoms";

import { Styles } from "./styles";

const getIcon = (name, link) => {
  switch (name) {
    case "facebook":
      return (
        <FacebookShareButton url={link}>
          <FaFacebookF size="1.15em" />
        </FacebookShareButton>
      );

    case "twitter":
      return (
        <TwitterShareButton url={link}>
          <FaTwitter size="1.25em" />
        </TwitterShareButton>
      );

    case "instagram":
      return <FaInstagram size="1.3em" />;

    case "behance":
      return <FaBehance size="1.3em" />;

    case "youtube":
      return <FaYoutube size="1.3em" />;

    case "share":
      return <HiOutlineShare size="1.3em" />;
    default:
      break;
  }
};

const SocialLinks = ({ links, color }) => {
  const [link, setLink] = useState();

  useEffect(() => {
    setLink(window.location.href);
  }, []);

  return (
    <Styles color={color}>
      <div className="social-links">
        {links.map(({ name, href }, index) => (
          <div key={index} className="pr-5">
            <Link href={href}>{getIcon(name, link)}</Link>
          </div>
        ))}
      </div>
    </Styles>
  );
};

export default SocialLinks;
