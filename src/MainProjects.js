import React, { Component } from 'react';
import resume from './resume.json';


const secondaryProjectWithImage = (publication) => (
  <div className="item row">
    <a
      className="col-md-4 col-sm-4 col-xs-12"
      href={publication.website}
      rel="noopener noreferrer"
      target="_blank">
      <img
        className="img-responsive project-image" src="assets/images/projects/project-5.png"
        alt={publication.name}
      />
    </a>
    <div className="desc col-md-8 col-sm-8 col-xs-12">
      <h3 className="title">
        <a
          href={publication.website}
          rel="noopener noreferrer"
          target="_blank">
          {publication.name}
        </a>
      </h3>
      <p>
        {publication.summary}
      </p>
      <p>
        <a
          className="more-link"
          href={publication.website}
          rel="noopener noreferrer"
          target="_blank">
          <i className="fa fa-external-link"></i> Find out more
        </a>
      </p>
    </div>
  </div>
);
secondaryProjectWithImage({});

class MainProjects extends Component {
  render() {
    if (resume.publications.length === 0) {
      return null;
    }
    return (
      <section className="latest section">
        <div className="section-inner">
          <h2 className="heading">Latest Projects</h2>
          <div className="content">
            <div className="item featured text-center">
              <h3 className="title">
                <a href={resume.publications[0].website} rel="noopener noreferrer" target="_blank">
                  {resume.publications[0].name}
                </a>
              </h3>
              <p className="summary">
                {resume.publications[0].summary}
              </p>
            </div>

            {/* <hr className="divider" /> */}
            {/* secondary featured projects go here */}
          </div>
        </div>
      </section>
    );
  }
}

export default MainProjects;
