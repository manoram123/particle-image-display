import React from 'react'

const Footer = () => {
    return (
        <div className="mt-5 footer">
            <div className="container mx-auto my-5 py-4 px-2">
                <div className="">
                    <div className="">
                        <div className="d-flex"><img style={
                                    {height: "7ch"}
                                }
                                src="/logo.png"
                                alt=""/><span className="fs-2 my-auto fw-bolder">AppHaru</span>
                        </div>
                    </div>
                    <div className="pt-4">
                        <div className="my-3">
                            <p className="m-0"><i className="fa-solid fa-earth me-1"></i> www.appharu.com</p>
                            <p className="m-0"><i className="fa-solid fa-location me-1"></i> New Baneshwor, Kathmandu</p>
                            <p className="m-0"><i className="fa-solid fa-phone me-1"></i> 98-888-888-88</p>
                        </div>
                        <p className="m-0 fw-bold">Contact Us</p>
                        <div className="d-flex">
                            <div className="rounded-circle d-flex align-items-center justify-content-center me-2 my-3"
                                style={
                                    {
                                        height: "5ch",
                                        width: "5ch",
                                        background: "#3874ff"
                                    }
                            }>
                                <i className="fa-brands fa-facebook-f text-light"></i>
                            </div>
                            <div className="rounded-circle d-flex align-items-center justify-content-center me-2 my-3"
                                style={
                                    {
                                        height: "5ch",
                                        width: "5ch",
                                        background: "#fc3838"
                                    }
                            }>
                                <i className="fa-brands fa-instagram text-light"></i>
                            </div>
                            <div className="rounded-circle d-flex align-items-center justify-content-center me-2 my-3"
                                style={
                                    {
                                        height: "5ch",
                                        width: "5ch",
                                        background: "#48a4fa"
                                    }
                            }>
                                <i className="fa-brands fa-twitter text-light"></i>
                            </div>
                            <div className="rounded-circle d-flex align-items-center justify-content-center me-2 my-3"
                                style={
                                    {
                                        height: "5ch",
                                        width: "5ch",
                                        background: "#32db54"
                                    }
                            }>
                                <i className="fa-brands fa-whatsapp text-light"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p className="text-center">&copy; 2022 All Right Reserved by AppHaru</p>
        </div>
    )
}

export default Footer
