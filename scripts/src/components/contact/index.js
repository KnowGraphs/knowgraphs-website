import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Image from '../image';

const contactsQuery = graphql`
  {
    allRdf(
      filter: {
        id: {
          in: [
            "https://dice-research.org/AxelCyrilleNgongaNgomo"
            "https://dice-research.org/NadineJochimsen"
          ]
        }
      }
    ) {
      edges {
        node {
          id
          path
          data {
            name
            namePrefix
            phone
            email
            photo
          }
        }
      }
    }
  }
`;

const ContactForm = () => {
  const {
    allRdf: { edges },
  } = useStaticQuery(contactsQuery);

  const axelProfile = edges.find(({ node }) =>
    node.id.endsWith('AxelCyrilleNgongaNgomo')
  ).node;
  const nadineProfile = edges.find(({ node }) =>
    node.id.endsWith('NadineJochimsen')
  ).node;

  return (
    <div className="columns">
      <style jsx>{`
        .column {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .round-image {
          width: 200px;
          height: 200px;
          border-radius: 100px;
          overflow: hidden;
        }

        .property-name {
          padding-top: 20px;
          margin-bottom: 5px !important;
          font-weight: normal;
        }

        .property-value {
          font-weight: 500;
          padding-top: 0;
          margin-bottom: 0 !important;
        }

        .form-column {
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
      <div className="column is-half">
        <div className="round-image">
          <Image
            filename={axelProfile.data.photo}
            alt={`${axelProfile.data.name} photo`}
          />
        </div>
        <p className="property-name has-text-grey-light">Project Coordinator</p>
        <p className="property-value">
          {axelProfile.data.namePrefix} {axelProfile.data.name}
        </p>

        <p className="property-name has-text-grey-light">Email</p>
        <a className="property-value brand-color" href={axelProfile.data.email}>
          {axelProfile.data.email.replace('mailto:', '')}
        </a>

        <p className="property-name has-text-grey-light">Phone</p>
        <p className="property-value">
          {axelProfile.data.phone.replace('tel:', '')}
        </p>
      </div>
      <div className="column is-half">
        <div className="round-image">
          <Image
            filename={nadineProfile.data.photo}
            alt={`${nadineProfile.data.name} photo`}
          />
        </div>
        <p className="property-name has-text-grey-light">Project Manager</p>
        <p className="property-value">
          {nadineProfile.data.namePrefix} {nadineProfile.data.name}
        </p>

        <p className="property-name has-text-grey-light">Email</p>
        <a
          className="property-value brand-color"
          href={nadineProfile.data.email}
        >
          {nadineProfile.data.email.replace('mailto:', '')}
        </a>

        <p className="property-name has-text-grey-light">Phone</p>
        <p className="property-value">
          {nadineProfile.data.phone.replace('tel:', '')}
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
