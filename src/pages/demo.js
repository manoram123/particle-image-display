import React from 'react'
import {params} from '../utilities/animParams.js'
import {useEffect} from 'react'


const ParticleEffect = ()=> {
  
  const data = params("logo.png", "#404040", 100)
  useEffect(() => {
        const script = document.createElement("script");
        script.src = "/pixeleffect.js";
        script.async = true;
        const addScript = document.getElementById('add-script')
        addScript.innerHTML = ""
        addScript.appendChild(script)
    }, [])
  
  return(
  <div>
  	<div className="" id="particle-image" data-params-src={JSON.stringify(data)}>
  	</div>
  </div>
  )
}
export default ParticleEffect;