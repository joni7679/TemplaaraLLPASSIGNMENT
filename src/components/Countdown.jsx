import React from "react";

const Countdown = () => {
    return (
        <div className="">
            <div className="d-flex align-items-center justify-content-center gap-3 text-center">

                <div className="col-3">
                    <span className="mb-2 fw-semibold ">Days</span>
                    <h3 className="fw-bold count ">03</h3>
                </div>

                <div className="col-auto d-flex align-items-center">
                    <span className="text-danger fs-1">:</span>
                </div>

                <div className="col-3">
                    <span className="mb-2 fw-semibold">Hours</span>
                    <h3 className="fw-bold  count">03</h3>
                </div>

                <div className="col-auto d-flex align-items-center">
                    <span className="text-danger fs-1">:</span>
                </div>

                <div className="col-3">
                    <span className="mb-2 fw-semibold">Minutes</span>
                    <h3 className="fw-bold  count">03</h3>
                </div>

                <div className="col-auto d-flex align-items-center">
                    <span className="text-danger fs-1">:</span>
                </div>

                <div className="col-3">
                    <span className="mb-2 fw-semibold">Seconds</span>
                    <h3 className="fw-bold count ">03</h3>
                </div>

            </div>
        </div>
    );
};

export default Countdown;