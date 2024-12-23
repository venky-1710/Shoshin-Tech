import React from 'react'
import { useState } from 'react'
import './Schedule.css'
import AnnouncementCard from '../AnnouncementCard/AnnouncementCard'
const Schedule = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="schedule">
        <div className="head">
          <div className="mainhead">Upcoming Schedule</div>
          <div className="mainhead2">Today, 13 sep 2021<spam><img src="./menu_items/downarrow.svg"></img></spam></div>
        </div>
        <div className='schedule-info'>
          <div className='prior'>Priority</div>
          <AnnouncementCard
            text="Review candidate applications"
            time="Today - 11.30 AM"
            plug="true"
            other="false" />
          <div className='other'>Other</div>
          <AnnouncementCard
            text="Interview with candidates"
            time="Today - 10.30 AM"
            plug="true"
            other="false" />
          <AnnouncementCard
            text="Short meeting with product designer from IT Departement"
            time="Today - 09.15 AM"
            plug="true"
            other="false" />
          <AnnouncementCard
            text="Short meeting with product designer from IT Departement"
            time="Today - 09.15 AM"
            plug="true"
            other="false" />
          {showAll && (
            <>
              <AnnouncementCard
                text="Short meeting with product designer from IT Departement"
                time="Today - 09.15 AM"
                plug="true"
                other="false" />
            </>
          )}
        </div>
        <btn className="btn1" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Back' : 'Create a new Schedule'}
        </btn>
    </div>
  )
}

export default Schedule
