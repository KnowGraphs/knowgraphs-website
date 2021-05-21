// use default custom css or include yours
import 'gatsby-theme-rdfsite/src/components/customSection/customsection.css';
import React from 'react';

const CustomSection = React.forwardRef((_, ref) => {
  return (
  <div>
    <div className="hero-body">
      <div className="container">
        <div className="section-header">
          <h1 className="title" ref={ref}>
            Welcome to KnowGraphs
          </h1>
        </div>

<p>Knowledge graphs (KGs) are a flexible knowledge representation paradigm intended to allow knowledge to be consumed by humans and machines. KGs are widely regarded as a key enabler for a number of increasingly popular technologies including Web search, question answering, personal assistants and AI across most sectors including Industry 4.0, personalized medicine, legislation, economics and more. KGs are now used by several large companies as a key component of their data products. However, while they are rightly praised as a key technology for all future data-driven enterprises and regarded as a promising approach towards “blurring the lines between human and machine”, KGs are currently unattainable for the majority of companies and users.</p>

<p>&nbsp;</p>
<p>The objective of KnowGraphs is to scale KGs to be accessible to a wide <a href="#tweets">audience</a> of users across multiple domains including companies (in domains including Industry 4.0, biomedicine, finance, law) of all sizes and even end users (e.g., through personal assistants and web search). Addressing this goal demands a <a href="deliverables">mix of works</a> from the theoretical foundations to the exploitation and economic repercussions of knowledge graphs. KnowGraphs focuses on addressing four of the facets of KG management: representation,  construction and maintenance, operation and exploitation.</p>
    

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

<p>&nbsp;</p>
<p>The <a href="team">KnowGraphs team</a> will address these pillars by researching and developing novel <a href="publications">methods, models and frameworks</a> using a cross-disciplinary mix of methods from Web Science, Data Science, Knowledge Representation, Knowledge Engineering, Big Data, data law, and business innovation. The <a href="partners">consortium</a> will apply its results across sectors, i.e., in domains including personalized medicine, Industry 4.0, question answering, personal assistants and Web search.</p>
<p>&nbsp;</p>
<p>Do not hesitate to contact us if you want to know more or are interested in collaborating with us.</p>
<p>&nbsp;</p>
          <h2 className="title">
            Job Vacancies
          </h2>

<p>The following positions are available in the context of the KnowGraphs project:</p>
<ul>
<li><a href="/downloads/08.1-20210521-KnowGraphs.pdf">PhD student</a> at <a href="">Universität Stuttgart</a>, Germany</li>
</ul>
      </div>
    </div>
  </div>
  );
});

export default CustomSection;
