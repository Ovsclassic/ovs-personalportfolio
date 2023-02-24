import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Ilorin, Ilorin, Kwara State, Nigeria{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree (Second Class Upper)
          </h4>
          <p> History and International Studies </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May, 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Google Certification{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Fundamentals Of Digital Marketing
          </h4>
          <p> Completed the Google Fundamentals learning program </p>
          <p> Learnt various Google Technologies and SEO tools</p>
          <p> Took Certification Exams</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June, 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Codecademy Certification{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p> Completion of Learn Advanced Javascript, Codecademy, 2021 </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Internship Training, Codeacademy
          </h4>
          <p>Developed the frontend infrastructure for 10+ projects.</p>
          <p>Solving and fixing bugs in a code and making features upgrade.</p>
          <p>
            Contributed to numerous project involving building,deploying api.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Freelance Technical Specialist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            Executed several graphics design using Adobe, Canva for artistes and
            brands.
          </p>
          <p>
            Developed the building of a google search and spotify clone fully
            functional and responsive for all devices using react router and api
          </p>
          <p>
            Edited a couple of organisation contents video meant for promotion
            using Adobe Premier Pro and Inshot.
          </p>
          <p>
            Contributed in the building of an educational website meant for
            e-learning using html5, css, javascript and react.js.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
