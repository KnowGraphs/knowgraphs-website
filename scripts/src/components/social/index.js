import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const links = [
  { url: 'https://twitter.com/knowgraphs', text: 'Twitter', icon: FaTwitter },
  {
    url: 'https://instagram.com/knowgraphs',
    text: 'Instagram',
    icon: FaInstagram,
  },
];

const Social = ({ style, className, hiddenMobile = true }) => (
  <div
    className={`column is-flex social ${
      hiddenMobile ? 'is-hidden-mobile' : ''
    }`}
    style={{
      position: 'fixed',
      left: 0,
      top: 96,
      height: 'calc(60% - 96px)',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      maxWidth: 50,
      margin: '0.5em',
      ...style,
    }}
  >
    {links.map(l => (
      <a key={l.url} href={l.url} title={l.text}>
        <span className="icon is-large">
          <l.icon size={25} />
        </span>
      </a>
    ))}
  </div>
);

export default Social;
