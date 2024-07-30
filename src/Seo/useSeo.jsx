import React, { useState, useCallback } from "react";
import { Seo } from "./index";

const useSeo = () => {
  const [title, setTitle] = useState("");
  const [metaTags, setMetaTags] = useState([]);
  const [linkTags, setLinkTags] = useState([]);

  const setMeta = useCallback((meta) => {
    setMetaTags((prevMeta) => [...prevMeta, meta]);
  }, []);

  const setLink = useCallback((link) => {
    setLinkTags((prevLink) => [...prevLink, link]);
  }, []);

  const setSeoTags = {
    setTitle,
    setMeta,
    setLink,
  };

  const SeoComponent = () => {
    return (
      <Seo>
        {title && <title>{title}</title>}
        {metaTags.map((meta, index) => (
          <meta key={index} {...meta} />
        ))}
        {linkTags.map((link, index) => (
          <link key={index} {...link} />
        ))}
      </Seo>
    );
  };

  return {
    SeoComponent,
    setSeoTags,
  };
};

export default useSeo;
