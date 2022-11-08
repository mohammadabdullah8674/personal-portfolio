import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2016 - 2017'
        iconStyle={{background : "#3e497a", color : "#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Childern Senior Secondary School, Azamgarh, UP 276001
          </h3>
          <p>High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2018 - 2019'
        iconStyle={{background : "#3e497a", color : "#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Childern Senior Secondary School, Azamgarh, UP 276001
          </h3>
          <p>Class 12th</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='2020 - 2024'
        iconStyle={{background : "#3e497a", color : "#fff"}}
        icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Om Dayal Group of Institute, Uluberia, Howrah
          </h3>
          <p>BTech CSE</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  )
}

export default Experience