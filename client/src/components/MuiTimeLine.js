import React from 'react'
import {Timeline,TimelineItem,TimelineSeparator,TimelineDot,TimelineConnector,TimelineContent} from "@mui/lab"
function MuiTimeLine() {
  return (
    <div>
    <Timeline position="alternate">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="secondary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Secondary</TimelineContent>
  </TimelineItem>

  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="success" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Success</TimelineContent>
  </TimelineItem>

  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="error" />
    </TimelineSeparator>
    <TimelineContent>Success</TimelineContent>
  </TimelineItem>
</Timeline>
</div>
  )
}

export default MuiTimeLine
