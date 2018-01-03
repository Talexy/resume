import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.about){

            var profileimage = this.props.about.profileimage;
            var fullname = this.props.about.fullname;
            var birthdate = this.props.about.birthdate;
            var job = this.props.about.job;
            var email = this.props.about.email;
            var lead = this.props.about.lead;
            var profile = this.props.about.profile;
            var skillsdesc = this.props.about.skillsdesc;

            var skills = this.props.about.skills.map(function(skill){
              return <span key={skill.name} className="skilltag">
                            <strong>{skill.name}</strong>
                      </span>
            });

    }

    return (
      <div>

        <section id="about">

          <div className="row section-intro">
            <div className="col-twelve">

              <h5>About</h5>
              <h1>Let me introduce myself.</h1>

              <div className="intro-info">

                <img src={profileimage} alt="Profile Picture" />

                <p className="lead">{lead}</p>
              </div>

            </div>
          </div>

          <div className="row about-content">

            <div className="col-six tab-full">

              <h3>Profile</h3>
              <p>{profile}</p>

              <ul className="info-list">
                <li>
                  <strong>Fullname:</strong>
                  <span>{fullname}</span>
                </li>
                <li>
                  <strong>Birth Date:</strong>
                  <span>{birthdate}</span>
                </li>
                <li>
                  <strong>Job:</strong>
                  <span>{job}</span>
                </li>
                {/* <li>
                  For the future
                  <strong>Website:</strong>
                  <span>xxwebsite/span>
                </li> */}
                <li>
                  <strong>Email:</strong>
                  <span>{email}</span>
                </li>

              </ul>

            </div>

            <div className="col-six tab-full">

              <h3>Skills</h3>
              <p>{skillsdesc}</p>

              <span>{skills}</span>

            </div>

          </div>

          {/* <div className="row button-section">
            <div className="col-twelve">
              <a href="" title="Download CV" className="button button-primary">My Linkedin</a>
            </div>
          </div> */}

        </section>

      </div>
    );
  }
}

export default About;
