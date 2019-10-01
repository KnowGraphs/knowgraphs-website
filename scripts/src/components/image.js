import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import KG from './svgs/knowgraphs-logo.inline.svg';

const Image = ({ filename, alt, style, className = 'image' }) => {
  // pre-calculate all images data
  // this is required because currently Gatsby don't understand
  // dynamic queries on the build time
  const {
    allImageSharp: { edges: images },
  } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  // find image that user wanted by matching path end
  const imageEl =
    filename && filename.length > 0
      ? images.find(element => element.node.fluid.src.endsWith(`/${filename}`))
      : undefined;

  if (!imageEl) {
    return (
      <KG height="100%" width="100%" preserveAspectRatio="xMidYMid meet" />
    );
  }

  const image = imageEl.node.fluid;
  return (
    <Img
      className={className}
      fluid={image}
      objectFit="cover"
      alt={alt}
      style={style}
    />
  );
};

export default React.memo(Image);
