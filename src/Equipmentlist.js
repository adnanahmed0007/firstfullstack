import { useEffect, useState } from "react";
import  UserContex1  from "./Usercontext";
import { useContext } from "react";
import "./Equipment.css";
export default function EquipmentList() {
     
    const [click2, setClick2] = useState(false);
  
    const [equipaarry, setArrayeuip] = useState([]);
    const [equip, setEquip] = useState("");
    const {fvalue}=useContext(UserContex1)

    

    useEffect(() => {
        if (click2) {
            try {
                async function Get_Euipmentlis() {
                    const url = `https://exercisedb.p.rapidapi.com/exercises/equipment/${equip}?limit=10&offset=0`;
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
                        setArrayeuip(result);
                    } catch (error) {
                        console.error(error);
                    }
                }
                Get_Euipmentlis();
            } catch (e) {
                console.log(e);
            }
        }
    }, [click2, equip]);

    return (
        <div>
 <h2 className="heading_equipment">First go to login if you are a existing user or register yourself</h2>
       {fvalue&&<div>
            <div className="equipmentlistexercise">
                 
                <input
                    type="text"
                    placeholder="Enter the equipment"
                    onChange={(e) => setEquip(e.target.value)}
                />
                   <button onClick={() => setClick2(!click2)}>Submit1</button>

                <div className="exercise-data">
                    {click2 && (
                        <div className="mainfile">
                            {equipaarry.map((value, index) => (
                                <div key={index} className="exercise-item">
                                <img src={value.gifUrl} alt="imagesEquipment" />
                                    <strong><p>The name of the body part is: {value.bodyPart}</p></strong>
                                    <strong><p>The equipment is: {value.equipment}</p></strong>
                                      
                              
                                    <strong><p>The instructions for doing the exercise are:</p></strong>
                                    <ul>
                                        {value.instructions.map((instruction, idx) => (
                                            <li key={idx}>{instruction}</li>
                                        ))}
                                    </ul>
                                    <strong><p>The name of the exercise is: {value.name}</p></strong>
                                    <strong><p>Target: {value.target}</p></strong>
                                    <strong><p>Secondary Muscles: {value.secondaryMuscles}</p></strong>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
     
          
           
            </div>}
        </div>
    );
}
