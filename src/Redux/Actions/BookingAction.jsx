import { BOOKING_SEAT, CANCEL_SEAT } from "../Type/BookingType";

export const bookingSeatAction = (seat) => {
    return {
        type: BOOKING_SEAT,
        seat
    }
}


export const cancelSeatAction = (seat) => {
    return {
        type: CANCEL_SEAT,
        seat
    }
}