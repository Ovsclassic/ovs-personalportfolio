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
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
