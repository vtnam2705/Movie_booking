import { BOOKING_SEAT, CANCEL_SEAT } from "../Type/BookingType";

// let bookingSeatList = [];
// const stateDefault = JSON.parse(localStorage.getItem('booking_seat')) || bookingSeatList

const stateDefault = {
    bookingSeatList: [],
}


export const BookingReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case BOOKING_SEAT: {
            let bookingSeatListUpdate = [...state.bookingSeatList];
            console.log(bookingSeatListUpdate);

            let index = bookingSeatListUpdate.findIndex(
                (item) => item.soGhe === action.seat.soGhe
            )

            if (index !== -1) {
                bookingSeatListUpdate.splice(index, 1);
            } else {
                bookingSeatListUpdate.push(action.seat)
            }

            state.bookingSeatList = bookingSeatListUpdate;
            localStorage.setItem('booking_seat_list', JSON.stringify(bookingSeatListUpdate))
            return { ...state }
        }

        case CANCEL_SEAT: {
            let bookingSeatListUpdate = [...state.bookingSeatList];
            let index = bookingSeatListUpdate.findIndex(
                (item) => item.soGhe === action.seat.soGhe
            )

            if (index !== -1) {
                bookingSeatListUpdate.splice(index, 1);
            }

            state.bookingSeatList = bookingSeatListUpdate;

            return { ...state };
        }

        default:
            return { ...state };
    }
};