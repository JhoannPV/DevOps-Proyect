import { useSelector, useDispatch } from "react-redux"
import type { RootState } from ".";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";
import type { CalendarEventData } from "../calendar";


export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const {
        events,
        activeEvent,
    } = useSelector((state: RootState) => state.calendar);

    const setActiveEvent = (calendarEvent: CalendarEventData | null) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async (calendarEvent: CalendarEventData) => {
        // TODO: llegar al backend

        // Todo bien
        if (calendarEvent._id) {
            // Actualizando
            dispatch(onUpdateEvent({ ...calendarEvent }));
        } else {
            // Creando
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
        }
    }

    const startDeletingEvent = async () => {
        // TODO: llegar al backend

        await dispatch(onDeleteEvent());
    }

    return {
        //* Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        //* Métodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
    }
}
