import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import {ThemeContext} from '../../context/themeContext';
import {useContext, useEffect} from "react"
import {params} from "../../utilities/animParams"

const Home = () => {


    const [theme] = useContext(ThemeContext);
    const data = params("logo.png", "#2060c7", 90)

    // Adding the script tag
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/pixeleffect.js";
        script.async = true;
        const addScript = document.getElementById('add-script')
        addScript.innerHTML = ""
        addScript.appendChild(script)
    }, [])

    return (
        <div>
            <Header/>
            <div className="container-fluid mx-auto">
                <div className="container mx-auto">
                    <div className="px-2">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="">
                                    <div>
                                        <h1 className="fw-bold"
                                            style={
                                                {fontSize: '3rem'}
                                        }>
                                            Welcome 👋 You are currently in{' '}
                                            <span className="text-primary">
                                                {
                                                theme ? 'Light' : 'Dark'
                                            }</span>
                                            {" "}Mode
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic repellat, alias quos ipsam 
                                                                                                                                                                                                                                                                                                                                                                                                                                							consectetur fugit, totam aliquid asperiores ipsa qui est magnam, accusamus adipisci.
                                        </p>
                                        <a href="/canvas" className="btn btn-primary rounded-pill my-4 py-3 px-5">Get Started</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-none d-md-block"
                                    style={
                                        {
                                            height: "70ch",
                                            width: "100%"
                                        }
                                }>
                                    <div className="" id="particle-image"
                                        data-params-src={
                                            JSON.stringify(data)
                                    }></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="py-5" style={{background: '#dbebff'}}>
                    <div className="container mx-auto">
                        <div className="px-2">
                            <h1 className="fw-bolder">Services we can provide</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                <br/>
                                Optio magni soluta magnam sed nihil? Nostrum modi facere repellat.</p>
                        </div>
                    </div>
                </div> */}
            </div>
            <Footer/>
        </div>
    )
}

export default Home
