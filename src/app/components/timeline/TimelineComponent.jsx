import React from 'react'
import { Timeline } from '../ui/timeline'
import SectionHeader from '../ui/SectionHeader'
import { timelineData } from './timelineData'


const TimelineComponent = () => {
  return (
    <section className='mt-64'>
        <SectionHeader text={"My Journey"} />
        <Timeline data={timelineData} />
    </section>
  )
}

export default TimelineComponent
