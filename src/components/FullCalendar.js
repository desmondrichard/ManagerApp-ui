import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const eventsList = [
    { title: 'Meeting', start: new Date() },
    { title: 'Event on Feb 1, 2024', start: new Date(2024, 1, 1) }
];
function FullCalendarComp() {
    return (
        <div>
            <FullCalendar 
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={true}
                events={eventsList}
                eventContent={renderEventContent}
                height={"100vh"}
            />
        </div>
    )
}

export default FullCalendarComp

// a custom render function
function renderEventContent(eventInfo) {
    return (
        <>
            {/* <b>{eventInfo.timeText}</b> */}
            <i style={{ fontSize: '11px'}}>{eventInfo.event.title}</i>
        </>
    )
}