import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cancelSeatAction } from '../Redux/Actions/BookingAction'

class ChooseSeat extends Component {
    render() {
        return (
            <div>
                <div className="mt-10">
                    <div>
                        <div className="d-flex items-center justify-content-center ">
                            <button className="bookedColor bg-success"></button>
                            <span className="text-white ml-5">Ghế đã đặt</span>
                        </div>
                        <div className="d-flex items-center justify-content-center  mt-3">
                            <button className="bookedColor bg-warning"></button>
                            <span className="text-white ml-5">Ghế chờ</span>
                        </div>{" "}
                        <div className="d-flex items-center justify-content-center  mt-3">
                            <button className="bookedColor"></button>
                            <span className="text-white ml-5">Ghế trống</span>
                        </div>
                    </div>

                    <div className="w-100">
                        <table className="w-100 mt-3 border border-white">
                            <thead className="">
                                <tr>
                                    <th className="text-white text-xl text-left border border-white p-2">
                                        Số ghế
                                    </th>
                                    <th className="text-white text-xl text-left border border-white p-2">
                                        Giá
                                    </th>
                                    <th className="text-white text-xl text-left border border-white p-2">
                                        Hủy
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.bookingSeatList.map((object, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="text-white text-xl text-left border border-white p-2">
                                                {object.soGhe}
                                            </td>
                                            <td className="text-white text-xl text-left border border-white p-2">
                                                {object.gia.toLocaleString()}
                                            </td>
                                            <td className="text-red-500 text-2xl text-left border border-white p-2">
                                                <button
                                                    onClick={() => {
                                                        this.props.dispatch(cancelSeatAction(object));
                                                    }}
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td className="text-white text-2xl text-left border border-white p-2">Tổng tiền</td>
                                    <td className="text-white text-2xl text-left border border-white p-2">
                                        {this.props.bookingSeatList.reduce(
                                            (tongTien, object, index) => {
                                                tongTien += object.gia;
                                                return (tongTien);
                                            },
                                            0
                                        ).toLocaleString()}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        bookingSeatList: state.BookingReducer.bookingSeatList,
    };
};
export default connect(mapStateToProps)(ChooseSeat);
