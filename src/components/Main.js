import React, { useEffect, useState} from "react";
import axios from "axios";



const Main = () => {

    const [data, setData] = useState('')
    
    useEffect( () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => {
            console.log(res);
        })
        .then(res => {
            setData(res.copyright)
        })
    }, [])

    return (
    <div className='main'>Hello World! Here's your data: {data}</div>
    )
    
};

export default Main