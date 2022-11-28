import React from 'react'
import {params} from '../utilities/animParams';


const ParticleImage = (props) => {

    const userData = localStorage.getItem("data__")
    var data; 
    if(props.image){
        data = params("logo.png", "#404040", 100)
    }
    else if (userData) {
        const dta = JSON.parse(userData)
        data = params(dta.image, dta.color, dta.density)
    }else{
        data = params("logo.png", "#404040", 100)
    }

    return (<div className="" style={{height: "70ch",width: "100%"}}>
        <div className="" id="particle-image"
            data-params-src={
                JSON.stringify(data)
        }></div>
    </div>)
}

export default ParticleImage
