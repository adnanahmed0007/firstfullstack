import React, { useEffect, useState } from "react";
import image1 from "./photo-1526506118085-60ce8714f8c5.jpeg";
 
import './Home.css';  

export default function Home() {
    const [click1, setClick1] = useState(false);
    const [data1Array, setArraydata] = useState([]);

    useEffect(() => {
        if (click1) {
            async function SetUPdata() {
                const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
                const options = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': '3757ece4d9msh3ebacece6864e2ap1b3b7djsna20808ecd1a5',
                        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                    }
                };

                try {
                    const response = await fetch(url, options);
                    const result = await response.json();
                    console.log(result);
                    setArraydata(result);
                } catch (error) {
                    console.error(error);
                }
            }
            SetUPdata();
        }
    }, [click1]);

    return (
        <div className="home-container">
            
            
            <img className="main-image" src={image1} alt="main gym" />
            
            <div className="content-overlay">
                <h2 className="heading">WELCOME TO THE AA GYM</h2>
                <h2>GET INFO ABOUT VARIOUS BODY PARTS</h2>
                <button className="submit-btn" onClick={() => setClick1(!click1)}>Submit</button>

                {data1Array.map((value, index) => (
                    <div key={index} className="exercise-info">
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
}
