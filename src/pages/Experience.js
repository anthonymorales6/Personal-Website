import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bay Shore High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bay Shore, NY
          </h4>
          <p><b>GPA:</b> 101.22</p>
          <p><b>Class Rank:</b> 4/476</p>
          <p><b>Extracurricular Activities:</b> Developing Young Minds Club, Athletes Helping Athletes, Science Olympiad, Math Team, Best Buddies,
            Spanish Club, National Honor Society, Jazz Band, Varsity Soccer</p>
          <p><b>Awards:</b> Suffolk Zone Student of the Year Award, 2x AP Scholar with Distinction, 1x AP Scholar, 3x NYSPHSAA Scholar Athlete, 2x Academic All-County, 12x Principal's List, 4x High Honor Roll </p>
          <p><b>Scholarships:</b> Ralph and Fran Eliot Memorial Scholarship, Sean Urda Memorial Scholarship, Ray Perez Memorial Scholarship</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Harvard College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cambridge, MA
          </h4>
          <p><b>Concentration:</b> Computer Science with a Secondary Field in Economics</p>
          <p><b>Extracurricular Activities:</b> Harvard Men's Club Soccer, Harvard Colombian Students Association,
            Harvard Computer Society, Harvard Society of Hispanic Professional Engineers, Harvard Latinx in Finance and Tech,
            Harvard Blockchain Club, Harvard Christians on Campus, Harvard Fuerza Latinx, Harvard Futsal Club</p>
        </VerticalTimelineElement>
      </VerticalTimeline >
    </div >
  );
}

export default Experience;
