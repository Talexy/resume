import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.resume){

            var intro = this.props.resume.intro;
            var jobs = this.props.resume.work.map(function(job){

                    return <div key={job.id} className="timeline-block">

                                <div className="timeline-ico">
                                  <i className="fa fa-briefcase"></i>
                                </div>

                                <div className="timeline-header">
                                  <h3>{job.title}</h3>
                                  <p>{job.date}</p>
                                </div>

                                <div className="timeline-content">
                                  <h4>{job.location}</h4>
                                  <p>{job.responsabilities}</p>
                                </div>
                      </div>
            });

            var education = this.props.resume.education.map(function(uni){

                    return <div key={uni.id} className="timeline-block">

                                <div className="timeline-ico">
                                  <i className="fa fa-graduation-cap"></i>
                                </div>

                                <div className="timeline-header">
                                  <h3>{uni.title}</h3>
                                  <p>{uni.date}</p>
                                </div>

                                <div className="timeline-content">
                                  <h4>{uni.location}</h4>
                                  <p>{uni.courses}</p>
                                </div>
                      </div>
            });

    }



    return (
      <div>

        <section id="resume" className="grey-section">

          <div className="row section-intro">
            <div className="col-twelve">

              <h5>Resume</h5>
              <h1>More of my credentials.</h1>

              <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>

            </div>
          </div>

          {/* ==================== WORK ==================== */}

            <div className="row resume-timeline">

              <div className="col-twelve resume-header">

                <h2>Work Experience</h2>

              </div>

              <div className="col-twelve">

                <div className="timeline-wrap">
                    {jobs}
                </div>

              </div>

            </div>

          {/* ==================== EDUCATION ==================== */}

          <div className="row resume-timeline">

            <div className="col-twelve resume-header">

              <h2>Education</h2>

            </div>

            <div className="col-twelve">

                <div className="timeline-wrap">

                  {education}

                </div>

            </div>

          </div>

        </section>


      </div>
    );
  }
}

export default Resume;
