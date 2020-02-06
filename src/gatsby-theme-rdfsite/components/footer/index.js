import { graphql, Link, useStaticQuery } from "gatsby";
import Logo from "gatsby-theme-rdfsite/src/components/footer/logo";
import Social from "gatsby-theme-rdfsite/src/components/social";
import React from "react";
import EUFLAG from "./euflag.inline.svg";

const links = [
  { url: "/team/", text: "Team" },
  { url: "/publications/", text: "Publications" },
  { url: "/news/", text: "News" },
  { url: "/partners/", text: "Partners" },
  { url: "/contact/", text: "Contact" },
  { url: "/imprint", text: "Imprint" },
  { url: "/privacy", text: "Privacy Policy" }
];

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            footer
          }
        }
      }
    `
  );

  return (
    <div className="footer">
      <div className="columns" style={{ flex: 1 }}>
        <div className="column">
          <Logo />
        </div>
        <div className="column dice-footer">
          {links.map(l => (
            <Link key={l.url} to={l.url}>
              {l.text}
            </Link>
          ))}
        </div>
        <Social hiddenMobile={false} />
      </div>

      <div className="horizontal-separator" />

      <div className="flex flex-col items-center justify-center text-center footer-note">
        {site.siteMetadata.footer}
        <div className="pt-2">
          <EUFLAG
            alt="EU flag"
            width={80}
            height="auto"
            viewBox="0 0 810 540"
            preserveAspectRatio="xMidYMid meet"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
