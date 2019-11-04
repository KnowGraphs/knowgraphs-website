// use default custom css or include yours
import 'gatsby-theme-rdfsite/src/components/customSection/customsection.css';
import React from 'react';

const CustomSection = React.forwardRef((_, ref) => {
  return (
    <div className="hero-body">
      <div className="container">
        <div className="section-header">
          <h1 className="title" ref={ref}>
            Research areas
          </h1>
        </div>

        <div className="research-areas-list">
          <div className="research-area-item research-area-rep">
            Representation
          </div>
          <div className="research-area-item research-area-cnm">
            Construction and Maintenance
          </div>
          <div className="research-area-item research-area-op">Operation</div>
          <div className="research-area-item research-area-expl">
            Exploitation
          </div>
        </div>
      </div>
    </div>
  );
});

export default CustomSection;
