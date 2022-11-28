import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import {useEffect} from "react"
import {params} from "../../utilities/animParams"

const Documentation = () => {

    const data = params("logo512.png", "#404040", 100)
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
            <div className="container mx-auto px-3">
                <h5 className="fw-bold my-4">Documentation</h5>
                <p>Here is how if you want to make your own particle image effect in your web page.</p>
                <div>
                    <p>1. Create a new react app using following command:
                    </p>
                    <iframe title="create" className="" src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=cobalt&wt=sharp&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=npx%2520create-react-app%2520appname"
                        style={
                            {
                                border: "0",
                                transform: "scale(1)",
                                overflow: "hidden"
                            }
                        }
                        sandbox="allow-scripts allow-same-origin"></iframe>
                </div>
                <div>
                    <p className='m-0'>2. Copy and paste the
                        <span className="text-primary mx-1">pixeleffect.js</span>
                        file in
                        <b className="mx-1">public</b>
                        folder.</p>
                        <p className='m-0 mb-3' style={{fontSize: "0.9rem"}}>Note: This script is a modified work from the following source code: <a href="https://github.com/paxtonfitzpatrick/particle-image" target="_blank" rel="noreferrer" >https://github.com/paxtonfitzpatrick/particle-image</a> </p>
                    <img style={
                            {height: "40ch"}
                        }
                        src="/assets/demo/img1.png"
                        alt=""/>
                </div>
                <div className="my-3">
                    <p>3. Copy and paste the
                        <span className="text-primary mx-1">animParams.js</span>
                        file inside
                        <b className="mx-1">src</b>
                        folder.</p>
                    <img style={
                            {height: "40ch"}
                        }
                        src="/assets/demo/img2.png"
                        alt=""/>
                </div>
                <div className="my-3">
                    <p>4. Create a react component and make a custom hook as shown below. Remember to import
                        <span className="text-primary mx-1">
                            params
                        </span>
                        from the specific folder you had put.
                    </p>
                    <iframe title="component" className="border bg-light rounded" src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=cobalt&wt=sharp&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=import%2520React%2520from%2520%27react%27%250Aimport%2520%257Bparams%257D%2520from%2520%27.%252FanimParams.js%27%250Aimport%2520%257BuseEffect%257D%2520from%2520%2522react%2522%250A%250Aconst%2520ParticleEffect%2520%253D%2520%28%29%253D%253E%2520%257B%250A%2520%2520%250A%2520%2520const%2520data%2520%253D%2520params%28%2522logo512.png%2522%252C%2520%2522%2523404040%2522%252C%2520100%29%250A%2520%2520useEffect%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520const%2520script%2520%253D%2520document.createElement%28%2522script%2522%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520script.src%2520%253D%2520%2522%252Fpixeleffect.js%2522%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520script.async%2520%253D%2520true%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520const%2520addScript%2520%253D%2520document.getElementById%28%27add-script%27%29%250A%2520%2520%2520%2520%2520%2520%2520%2520addScript.innerHTML%2520%253D%2520%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520addScript.appendChild%28script%29%250A%2520%2520%2520%2520%257D%252C%2520%255B%255D%29%250A%2520%2520%250A%2520%2520return%28%250A%2520%2520%253Cdiv%253E%250A%2520%2520%2509%253Cdiv%2520className%253D%2522%2522%2520id%253D%2522particle-image%2522%2520data-params-src%253D%257BJSON.stringify%28data%29%257D%253E%250A%2520%2520%2509%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%250A%257D%250Aexport%2520default%2520ParticleEffect%253B"
                        style={
                            {
                                width: "706px",
                                height: "506px",
                                border: "0",
                                transform: "scale(1)",
                                overflow: "hidden"
                            }
                        }
                        sandbox="allow-scripts allow-same-origin"></iframe>
                </div>
                <div>
                    <p>4. Your page should rendering something like this.</p>
                    <div className="col-md-6 bg-light border rounded" id="particle-image"
                        data-params-src={
                            JSON.stringify(data)
                    }></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Documentation
