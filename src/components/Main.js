import React, { useEffect, useState} from "react";
import axios from "axios";



const Main = () => {

    const [data, setData] = useState('')
    
    useEffect( () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => {
            console.log(res.data);
            setData(res.data.url);
        })
    }, [])

    return (
    <div className='container'>
        <div className='main'>
           <img src={data} alt="APOD" /> 
        </div>
    </div>

    )
    
};

export default Main