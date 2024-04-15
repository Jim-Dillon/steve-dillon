import { FunctionComponent } from 'react'
import styles from '/src/css/exhib.module.scss'

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
            <img src={timelineImg} alt="" />
            <div className={styles.timelineDesc}>
                <div className={styles.timelineItemDate}>
                    <span>{date}</span>
                </div>
                <div className={styles.timelineItemName}>
                    <h2>{eventName}</h2>
                </div>
                <div className={styles.timelineItemContent}>
                    <p>{content}</p>
                </div>
                <div className={styles.timelineItemLocation}>
                    <span>{location}</span>
                </div>
                
            </div>   
        </div>
    </div>
  )
}

export default TimelineItem