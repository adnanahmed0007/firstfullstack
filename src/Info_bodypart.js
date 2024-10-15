import React, { useEffect, useState } from "react";
import "./Bodyinfo.css";
 import UserContex1 from './Usercontext.js'
import { useContext } from "react";
export default function Info_Body() {
    const [click1, setClick1] = useState(false);
    const [dataArray, setArray] = useState([]);
    const [part, setPart] = useState("");
    const {fvalue}=useContext(UserContex1);

    useEffect(() => {
        if (click1 && part) {
            async function BodyInfo() {
                const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}?limit=10&offset=0`;
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
                    setArray(result);
                    console.log(result);
                } catch (error) {
                    console.error(error);
                }
            }
            BodyInfo();
        }
    }, [click1, part]);

    return (
        <div className="info-body-container">
        <h2 className="heading_info">First register or you are a existing user go to login</h2>
        {fvalue&&<div>
            <input 
                type="text"
                placeholder="Enter the body part name"
                onChange={(e) => setPart(e.target.value)}
            />
            <button onClick={() => setClick1(!click1)}>Submit</button>
            
            {click1 && (
                <div>
                    {dataArray.length > 0 ? (
                        dataArray.map((value, index) => (
                            <div key={index} className="exercise-info">
                                <li>{value.bodyPart}</li>
                                <li>{value.equipment}</li>
                                <li>
                                    <img src={value.gifUrl} alt="exercise gif" />
                                </li>
                                <ul>
                                    {value.instructions.map((instruction, idx) => (
                                        <li key={idx}>{instruction}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <h2>No data found for this body part.</h2>
                    )}
                </div>
            )}
            </div>}
        
        </div>
    );
}
