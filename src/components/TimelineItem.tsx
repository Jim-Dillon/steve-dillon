import { FunctionComponent } from 'react'
import styles from '/src/css/exhib.module.scss'
import { arrow } from '../assets/SVG';

export interface TimelineItemProps {
    timelineImg: any,
    date: string,
    eventName: string,
    content: string,
    location: string,
}

const TimelineItem: FunctionComponent<TimelineItemProps> = ({ timelineImg, date, eventName, content, location }) => {
  return (
    <div className={styles.timelineItem}>
        <div className={styles.timelineItemContainer}>
            <div className={styles.timelineDesc}>
                <div className={styles.timelineItemDate}>
                    <span>{date}</span>
                </div>
                <div className={styles.timelineItemName}>
                    <h2>{eventName}</h2>
                </div>
                <div className={styles.timelineItemLocation}>
                    <span>{location}</span>
                </div> 
                <div className={styles.timelineItemContent}>
                    <p>{content}</p>
                    <div className={styles.review}>
                        <p>Read the review</p>
                        {arrow}
                    </div>    
                </div> 
            </div> 
            <img src={timelineImg} alt="" />  
        </div>
    </div>
  )
}

export default TimelineItem