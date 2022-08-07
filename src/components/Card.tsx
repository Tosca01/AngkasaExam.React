import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="px-4 py-2 flex flex-col md:flex-row lg:flex-row" id="header-card">
                    <div className="mr-auto inline-flex font-bold">
                        <span className="m-auto mr-2">No. </span>
                        <span className="py-2 px-3 bg-blue-500 rounded text-white my-auto">1</span>
                        <span className="m-auto ml-2">/ 20</span>
                        <p className="hidden" id="active">20</p>
                    </div>
                    <div className="w-full md:w-auto lg:w-auto md:ml-auto lg:ml-auto flex">
                        <div className="flex">
                            <span className="my-auto mr-2 text-sm md:text-base lg:text-base">Ukuran teks : </span>
                            <div className="opsi-font">
                                <input type="radio" name="ukuranteks" id="kecil" className="hidden" checked={true} />
                                <label className="text-base radio-check-label">A</label>
                            </div>
                            <div className="opsi-font">
                                <input type="radio" name="ukuranteks" id="sedang" className="hidden" />
                                <label className="text-lg radio-check-label">A</label>
                            </div>
                            <div className="opsi-font">
                                <input type="radio" name="ukuranteks" id="besar" className="hidden" />
                                <label className="text-xl radio-check-label">A</label>
                            </div>
                        </div>
                        <div className="ml-auto">
                        </div>
                    </div>
                </div>
                <hr className="garis" />
                <div className="w-full py-4 flex justify-center items-center">
                    <div className="loader">
                    <svg className="circular" viewBox="25 25 50 50">
                        <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                    </svg>
                    </div>
                </div>
                <div className="px-4 py-2 mt-4 flex flex-col" id="soalContent">
                    
                </div>
            </div>
        );
    }
}