import React, { Component } from 'react';
import { connect } from "react-redux";
import { bookingSeatAction } from '../Redux/Actions/BookingAction';


class RenderSeat extends Component {
    renderSeat = () => {
        let { rowSeat } = this.props;
        return rowSeat.danhSachGhe.map((item, idx) => {
            let styleBooked = "";
            let disabled = false;
            if (item.daDat) {
                styleBooked = "gheDuocChon";
                disabled = true;
            }


            let styleBooking = "";
            let idBooking = this.props.bookingSeatList.findIndex(
                (object) => object.soGhe === item.soGhe
            );
            
            if (idBooking !== -1) {
                styleBooking = "gheDangChon";
            }

            return (
                <button
                    disabled={disabled}
                    className={`ghe ${styleBooked} ${styleBooking} text-black`}
                    key={idx}
                    onClick={() => {
                        this.props.dispatch(bookingSeatAction(item));
                    }}
                >
                    {item.soGhe}
                </button>
            );
        });
    };


    renderRowSeat = () => {
        let { rowSeat, numRowSeat } = this.props;
        if (numRowSeat === 0) {
            return (
                <div>
                    {rowSeat.hang}
                    {rowSeat.danhSachGhe.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className="rowNumber text-x1"
                            >
                                {item.soGhe}
                            </button>
                        );
                    })}
                </div>
            );
        }

        return (
            <div>
                <span className="inline-block w-4">{rowSeat.hang}</span>
                {this.renderSeat()}
            </div>
        )
    }

    render() {
        return (
            <div
                className="text-white mt-2 text-xl"
            >
                {this.renderRowSeat()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        bookingSeatList: state.BookingReducer.bookingSeatList,
    };
};

export default connect(mapStateToProps)(RenderSeat);