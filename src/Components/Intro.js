import React, { Component } from 'react';

class Intro extends Component {
  render() {

    if(this.props.intro){
        var hello = this.props.intro.hello;
        var iam = this.props.intro.iam;
        var description = this.props.intro.description;
    }

    return (
      <div>

              <section id="intro">

                     <div className="intro-overlay"></div>

                     <div className="intro-content">
                       <div className="row">

                         <div className="col-twelve">

                         <h5>{hello}</h5>
                         <h1>{iam}</h1>

                         <p className="intro-position">{description}</p>

                         <a className="button stroke smoothscroll" href="about" title="">More About Me</a>

                       </div>

                       </div>
                     </div>

                     <ul className="intro-social">
                         <li><a href=""><i className="fa fa-facebook"></i></a></li>
                         <li><a href=""><i className="fa fa-twitter"></i></a></li>
                         <li><a href=""><i className="fa fa-instagram"></i></a></li>
                      </ul>

              </section>


      </div>
    );
  }
}

export default Intro;
