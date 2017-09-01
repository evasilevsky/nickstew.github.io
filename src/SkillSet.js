import React, { Component } from 'react';
import resume from './resume.json';

class SkillSet extends Component {
  render() {
    if (!resume.skills || resume.skills.length < 1 ||
      !resume.basics.profiles || resume.basics.profiles.length < 2) {
      console.log('add more skills for this section to show');
      return null;
    }
    return (
      <aside className="skills aside section">
        <div className="section-inner">
          <h2 className="heading">Skills</h2>
          <div className="content">
            <p className="intro">
              I enjoy working in SPA frameworks like Angular 1.x and React. However, when I get the chance, I like to utilize the new functionalities of Angular 2+.
            </p>
            <div className="skillset">
              {resume.skills.map((skill, index) => (
                <div key={"skill-" + index} className="item">
                  <h3 className="level-title">
                    {skill.name}
                    <span className="level-label">
                      {parseInt(skill.level, 10) >= 70 ? 'Expert' : 'Pro'}
                    </span>
                  </h3>
                  <div className="level-bar">
                    <div className="level-bar-inner" data-level={skill.level + '%'}>
                    </div>
                  </div>
                </div>
              ))}
              <p>
                <a className="more-link" href={resume.basics.profiles[1].url}>
                  <i className="fa fa-external-link"></i> More on LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default SkillSet;
