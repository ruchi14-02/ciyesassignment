import React,{useState} from 'react'

function Dashboard() {

    const [youtubeID] = useState('IEDEtZ4UVtI')

    return (
      <center>
        <br></br>
        <div>
          {/* [...] */}
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/UVMJuUO-6FY'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
      </center>
    )
 
}

export default Dashboard