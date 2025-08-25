import { useSelector, useDispatch } from "react-redux"
import type { RootState } from ".";
import { onSetActiveEvent } from "../store";
import type { CalendarEventData } from "../calendar";


export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const {
        events,
        activeEvent,
    } = useSelector((state: RootState) => state.calendar);

    const setActiveEvent = (calendarEvent: CalendarEventData) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    return {
        //* Propiedades
        events,
        activeEvent,

        //* Métodos
        setActiveEvent,
    }
}
