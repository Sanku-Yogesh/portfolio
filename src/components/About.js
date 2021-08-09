import React, { Component } from 'react';
class About extends Component {
  render() {
    return (
      <div className="wrapper" id="About" >
        <h2 className="heading">About me</h2>
        <div className="container">
          <div className="about">

          <h4>Education</h4>
            <p>Bachelor of Technology in Electronics and Electrical Communication Engineering from Indian Institute of Technology, Kharagpur (IIT Kharagpur).<span>(2017 - 2021)</span></p>
            <p>Currently pursuing my masters in Visual Information and Embedded Systems at IIT Kharagpur. </p>


            <h4>Work Experience</h4>
            <h5>Huawei <span>Summer Intern (2021 Summer)(India/Pune)</span></h5>
            <ul>
              <li>Worked as a Application library developer.</li>
              <li>Converted two libraries form android to Harmony OS</li?>
            </ul>

          </div>
        </div>
      </div>
      );
  }
}
  
  export default About;
