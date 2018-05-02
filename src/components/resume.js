import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import myPhoto from '../pictures/myPhoto.png'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src= {myPhoto}
                alt="avatar"
                style={{height: '200px', borderRadius: "50%"}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Tarek Al Khatib</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid red', width: '50%'}}/>
            <p> I am an organized person with an eye for details. I have
                four years working experience in customer service.
                I am an passionate Web Developer and gained knowledge and
                experiences in <b> JS, React, Jquery, Bootstrap, Node.js, MongoDB,
                MySQL, ES2015, Webpack, git </b>.
                <br/>
                Currently I am attending one year Course in Web Development, and I am going to finish in the end of June this Year. I have learned the most newest technologies in Web Development JavaScript mainly React framework, JQuery, Node.js, Bootstrap 4, MongoDB, Git. And now I am looking for job opportunity or an internship where I can sharp my Web development skills.
                </p>

            <hr style={{borderTop: '3px solid red', width: '50%'}}/>
            <h5>Address</h5>
            <p>Elbret-Einstein 25, 14471 Potsdam Germany</p>
            <h5>Phone</h5>
            <p>+4915752667164</p>
            <h5>Email</h5>
            <p>tarek.alkhatib1@gmail.com</p>
            <h5>Web</h5>
            <p>tarek.alkhatib.com</p>
            <hr style={{borderTop: '3px solid red', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2007}
              endYear={2018}
              schoolName="DCI Digital Career Institue"
              schoolDescription="Qualification course in Full Stack Web
                  Development, one intensive year of training. "
               />

               <Education
                 startYear={2005}
                 endYear={2011}
                 schoolName="Damascus University"
                 schoolDescription="Bachelor of English
                    Literature \ Syria-Damascuss"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={"present"}
              jobName="Translator volunteer work at Red Cross\ Potsdam"
              jobDescription=""
              />

              <Experience
                startYear={2013}
                endYear={2014}
                jobName="Aid Worker at Hiba Foundation\ Turkey"
                jobDescription="rapidly assessing emergency situations; working
                    closely with staff located emergency areas."
                />

                <Experience
                startYear={2007}
                endYear={2011}
                jobName="Customer Service officer at Cham Bank\ Syria"
                jobDescription="Performed check cashing, depositing."
                />


              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
