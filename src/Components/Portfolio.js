import React, { Component } from 'react';

class Portfolio extends Component {

  render() {

    if(this.props.portfolio){

            var intro = this.props.portfolio.intro;
            var portfolio = this.props.portfolio.projects.map(function(project){

                    return <div key={project.id} className="bgrid folio-item">
                           <div className="item-wrap">
                            <img src={project.image} alt="Liberty"/>
                              <a href={project.link} className="overlay">
                                 <div className="folio-item-table">
                                  <div className="folio-item-cell">
                                   <h3 className="folio-title">{project.title}</h3>
                                   <span className="folio-types">
                                      {project.type}
                                   </span>
                                 </div>
                                </div>
                                </a>
                             </div>
                          </div>
            });
    }

    return (
      <div>

        <section id="portfolio">

          <div className="row section-intro">
            <div className="col-twelve">

              <h5>Portfolio</h5>
              <h1>Check Out Some of My Works.</h1>

              <p className="lead">{intro}</p>

            </div>
          </div>

          <div className="row portfolio-content">
            <div className="col-twelve">
                 <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
                   {portfolio}
                 </div>
            </div>
          </div>

        </section>

      </div>
    );
  }
}

export default Portfolio;
