import React, { useEffect, useState} from "react";
import axios from "axios";



const Main = () => {

    const [url, setUrl] = useState('')
    const [cr, setCr] = useState('')
    const [date, setDate] = useState('')
    const [exp, setExp] = useState('')
    const [title, setTitle] = useState('')
    
    useEffect( () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => {
            console.log(res.data);
            setUrl(res.data.url);
            setCr(res.data.copyright);
            setDate(res.data.date);
            setExp(res.data.explanation);
            setTitle(res.data.title);
        })
    }, [])

    return (
    <div className='container'>
        <div className='main'>
           <img src={url} alt="APOD" /> 
           <span>Img URL: {url}</span>
        </div>
        <div className='info'>
            <span>Copyright: {cr}</span>
            <span>Date: {date}</span>
            <span>Explanation: {exp}</span>
            <span>Title: {title}</span>
        </div>
    </div>

    )
    
};

export default Main