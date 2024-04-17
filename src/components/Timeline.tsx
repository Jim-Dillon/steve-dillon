import bedford from '/src/assets/img/NICE_Bedford.png'
import panel from '/src/assets/img/panel_img.png'
import luton from '/src/assets/img/luton_bros.png'
import queensPark from '/src/assets/img/QP.png'
import rome from '/src/assets/img/rome.png'
import lawless from '/src/assets/img/lawless.png'
import lucca from '/src/assets/img/lucca.png'
import styles from '/src/css/exhib.module.scss'
import TimelineItem from "./TimelineItem"

const Timeline = () => {
  return (
    <>
        <div className={styles.timelineTitle}>
            <h2>Where we've been</h2>
        </div>
        <div className={styles.timelineContent}>
            <div className={styles.timelineGraphic}>
                <div className={styles.timelineSection}></div>
                <div className={styles.timelineSection}></div>
                <div className={styles.timelineSection}></div>
                <div className={styles.timelineSection}></div>
                <div className={styles.timelineSection}></div>
                <div className={`${styles.timelineSection} ${styles.last}`}></div>
            </div>
            <div className={styles.timelineItems}>
                <TimelineItem 
                    timelineImg={lucca} 
                    date={'1st - 5th Nov 2023'}
                    eventName={'Lucca Comic Con'}
                    content={'Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer.'}
                    location={'Lucca, Italy'}
                />
                <TimelineItem 
                    timelineImg={bedford} 
                    date={'2nd-3rd Sep 2023'}
                    eventName={'NICE Bedford Comic Con'}
                    content={'Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer.'}
                    location={'Bedford'}
                />
                <TimelineItem 
                    timelineImg={lawless} 
                    date={'27th-28th May 2023'}
                    eventName={'Lawless Comic Con'}
                    content={'Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer.'}
                    location={'Bristol'}
                />
                <TimelineItem 
                    timelineImg={rome} 
                    date={'1st Apr - 4th May 2023'}
                    eventName={"C'Art Gallery, Rome"}
                    content={'Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer.'}
                    location={'Rome, Italy'}
                />
                <TimelineItem 
                    timelineImg={queensPark} 
                    date={'6th Aug - 1st Sep 2022'}
                    eventName={'Worldly, Wicked & Wise'}
                    content={'Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer.'}
                    location={'Queens Park, London'}
                />
                <TimelineItem 
                    timelineImg={luton} 
                    date={'2nd Jun - 7th Jul 2022'}
                    eventName={'Culture Trust, Luton'}
                    content={'Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer.'}
                    location={'Luton'}
                />
                <TimelineItem 
                    timelineImg={panel} 
                    date={'22nd Mar - 5th Apr 2022'}
                    eventName={'Panel Gallery'}
                    content={'Lorem ipsum dolor sit amet consectetur. Vulputate in tristique blandit cras in adipiscing imperdiet habitasse euismod. Molestie at amet diam enim. Gravida in egestas feugiat nascetur tortor integer.'}
                    location={'Northampton'}
                />
            </div>
        </div>
    </>
  )
}

export default Timeline