import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.testimonials){

        var testimonial = this.props.testimonials.testimonialslist.map(function(testi){

            return <li key={testi.id}>
                   <blockquote>
                      <a href={testi.link} target="_blank">
                        <p>{testi.text}</p>
                      </a>
                      <cite>{testi.user}</cite>
                   </blockquote>
                </li>
      });
    }

    return (
      <div>

        <section id="testimonials">

           <div className="text-container">

              <div className="row">

                 <div className="two columns header-col">
                    <br/>
                    <h1><span>Testimonials</span></h1>
                 </div>

                 <div className="ten columns flex-container">
                    <div className="flexslider">
                       <ul className="slides">
                         {testimonial}
                       </ul>
                    </div>
                 </div>

              </div>

            </div>

        </section>

      </div>
    );
  }
}

export default Testimonials;
