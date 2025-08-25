import { useState } from 'react'
import { Calendar, type View } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { CalendarEvent, CalendarModal, Navbar, type CalendarEventData } from ".."

import { localizer, getMessagesES } from '../../helpers'
import { useCalendarStore, useUiStore } from '../../hooks'


export const CalendarPage = () => {
    const { events, setActiveEvent } = useCalendarStore();
    const { openDateModal } = useUiStore();
    const [lastView, setLastView] = useState<View>((localStorage.getItem('lastView') || 'week') as View);

    const eventStyleGetter = (event: CalendarEventData, start: Date, end: Date, isSelected: boolean) => {

        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
        }

        return {
            style,
        }
    }

    const onDoubleClick = () => {
        // console.log({ doubleClick: event });
        openDateModal();
    }

    const onSelect = (event: CalendarEventData) => {
        // console.log({ click: event });
        setActiveEvent(event);
    }

    const onViewChanged = (event: View) => {
        localStorage.setItem('lastView', event);
        setLastView(event);
    }

    return (
        <>
            <Navbar />
            <Calendar
                culture='es'
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />
            <CalendarModal />
        </>
    )
}
