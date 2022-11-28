import React from 'react';
import Header from '../../components/Header';
import {useEffect, useState} from 'react'
import ParticleImage from "../../components/ParticleImage"
import Footer from "../../components/Footer"

export const image = (url) => {}


const Canvas = () => {

    const userData = localStorage.getItem("data__")
    var dta;
    if (userData) {
        dta = JSON.parse(userData)
    }
    // Assigning default value to the parameters
    const [color, setColor] = useState(dta ? dta.color : "#404040")
    const [image, setImage] = useState(dta ? dta.image : "logo.png")
    const [density, setDensity] = useState(dta ? dta.density : 110)

    const change = () => {
        const data = {
            image,
            color,
            density
        }
        var nData = JSON.stringify(data)
        localStorage.setItem('data__', nData)
        window.location.href = "/canvas"
    }

    const imageSet = (file) => {
        const image = file;
        setImage(image)
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            const imageURL = reader.result;
            setImage(imageURL)
        }
    }

    // Adding the script tag
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/pixeleffect.js";
        script.async = true;
        const addScript = document.getElementById('add-script')
        addScript.innerHTML = ""
        addScript.appendChild(script)
    }, [])

    // Add more color code in this array
    const colorPicker = [
        "#3576f0",
        "#292929",
        "#fc037b",
        "#f7314c",
        "#24e31e",
        "#ffffff"
    ]

    // Sample Images from asset folder
    const sampleImages = [
        "/logo.png",
        "/assets/images/fifa22.png",
        "/assets/images/nepal.png",
        "/assets/images/usa.png",
        "/assets/images/twitter.png"
    ]

    const setSample = (img) => {
        setImage(img)
    }


    return (
        <div className="">
            <Header/>
            <div className="container mx-auto">
                <div className="">
                    <h5 className="fw-bolder mb-4">Interactive Particle Image Displayer</h5>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div id="particle-box" className=""
                            style={
                                {
                                    border: "2px dashed #a3a3a3",
                                    borderRadius: "5px"
                                }
                        }>
                            <ParticleImage/>
                        </div>
                        <div className="d-flex">
                            {
                            sampleImages.map((val, ind) => {
                                return (
                                    <div key={ind}
                                        onClick={
                                            () => {
                                                setSample(val)
                                            }
                                        }
                                        className="sp-box">
                                        <img tabIndex={ind}
                                            id={
                                                `sp${ind}`
                                            }
                                            className="me-2 mt-3 sample-image"
                                            style={
                                                {
                                                    height: "10ch",
                                                    width: "10ch",
                                                    objectFit: "contain",
                                                    border: "2px solid #d5d5d5",
                                                    borderRadius: "6px"
                                                }
                                            }
                                            src={val}
                                            alt=""/>
                                    </div>
                                )
                            })
                        } </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <h5 className="fw-bold mb-3">Try Your Own</h5>
                        <div className="py-3 px-3 rounded"
                            style={
                                {border: "1px dashed #b5b5b5"}
                        }>
                            <input onChange={
                                    (e) => imageSet(e.target.files[0])
                                }
                                type="file"
                                accept="image/png"/>
                            <p className="m-0 mt-1"
                                style={
                                    {fontSize: "0.8rem"}
                            }>Note: Please insert .png image with transparent background.</p>
                        </div>

                        <div className="my-3">
                            <p>Choose Particles Color</p>
                            <div className="d-flex flex-wrap">
                                {
                                colorPicker.map((val, ind) => {
                                    return <div key={ind}
                                        className="mb-2">
                                        <button onClick={
                                                () => setColor(`${val}`)
                                            }
                                            className="btn me-2"
                                            style={
                                                {
                                                    height: "5ch",
                                                    width: "5ch",
                                                    background: `${val}`
                                                }
                                        }></button>
                                    </div>
                            })
                            } </div>
                            <div>
                                <input onChange={
                                        (e) => {
                                            setColor(e.target.value)
                                        }
                                    }
                                    className="form-control w-50"
                                    type="text"
                                    value={color}
                                    placeholder="HEX code: #000000"/>
                            </div>
                        <div className="mt-5">
                            <p>Particle Density</p>
                            <input className="form-control"
                                onChange={
                                    (e) => setDensity(e.target.value)
                                }
                                value={density}
                                type="number"/>
                        </div>
                        <hr className="my-4"/>
                        <button id="submit" type="button"
                            onClick={
                                () => change()
                            }
                            className="btn-primary text-light rounded-pill py-3 hover w-100"
                            style={
                                {
                                    border: "none",
                                    borderRadius: "6px"
                                }
                        }>Apply</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    );
};

export default Canvas;
