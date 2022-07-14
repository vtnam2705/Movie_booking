import React, { Component } from 'react'
import ChooseSeat from './ChooseSeat'
import RenderSeat from './RenderSeat'
import dataSeat from '../Data/BookingFilm/danhSachGhe.json'


export default class BookingFilm extends Component {
    renderRowSeat = () => {
        return dataSeat.map((item, idx) => {
            return (
                <div key={idx}>
                    <RenderSeat rowSeat={item} numRowSeat={idx} />
                </div>
            )
        })
    }

    render() {
        return (
            <div
                className="fixed w-full h-full"
                style={{
                    backgroundImage: "url(./img/bgmovie.jpg)",
                    backgroundSize: "100%",
                }}
            >
                <div className="fixed w-full h-full bg-black opacity-75">
                    <div className="d-flex pt-5">
                        <div className="col-md-8 px-4">
                            <h1 className="text-white text-4xl text-center">
                                ĐẶT VÉ XEM PHIM
                            </h1>
                            <div className="flex flex-col items-center mt-10">
                                <h3 className="text-white mt-5">Màn hình</h3>
                                <div className="screen mx-auto mt-3"></div>
                                <div>{this.renderRowSeat()}</div>
                            </div>
                        </div>
                        <div className="col-md-4 px-4">
                            <h1 className="text-white text-3xl text-center">
                                DANH SÁCH GHẾ BẠN CHỌN
                            </h1>
                            <ChooseSeat />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
