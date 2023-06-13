import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../../styles";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";


const Experience = () => {
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>What actions have I taken up until now?</p>
      <h2 className={styles.sectionHeadText}>Work Milestones.</h2>
    </motion.div>

<div className="mt-20 flex flex-col">
  <VerticalTimeline>

  </VerticalTimeline>
</div>
</>
  )
}

export default SectionWrapper(Experience, "work")