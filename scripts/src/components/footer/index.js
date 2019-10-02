import { Link } from 'gatsby';
import React from 'react';
import Social from '../social';
import KG from '../svgs/knowgraphs.inline.svg';

const links = [
  { url: '/team/', text: 'Team' },
  { url: '/publications/', text: 'Publications' },
  { url: '/news/', text: 'News' },
  { url: '/partners/', text: 'Partners' },
  { url: '/contact/', text: 'Contact' },
  { url: '/imprint', text: 'Imprint' },
  { url: '/privacy', text: 'Privacy Policy' },
];

const Footer = () => (
  <div className="footer">
    <div className="columns" style={{ flex: 1 }}>
      <div className="column is-flex">
        <KG className="dice-nav-logo-footer" />
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

    <div className="is-flex horizontally-centered funding-text">
      This project has received funding from the European Union’s Horizon 2020
      research and innovation programme under the Marie Skłodowska-Curie grant
      agreement No 860801.
    </div>
  </div>
);

export default Footer;
