import './Pop.css';
import { useState } from "react";

function Pop() {
    const [openPopONE, setOpenPopONE] = useState(false);
    const [openPopTWO, setOpenPopTWO] = useState(false);
    const [openPopTHREE, setOpenPopTHREE] = useState(false);
    const [openPopFOUR, setOpenPopFOUR] = useState(false);
    const [openPopFIVE, setOpenPopFIVE] = useState(false);
    const [openPopSIX, setOpenPopSIX] = useState(false);
    const [openPopSEVEN, setOpenPopSEVEN] = useState(false);
    const [openPopEIGHT, setOpenPopEIGHT] = useState(false);

    return (
        <div>
            <div className = "image-container">
                <button onClick={() => setOpenPopONE(true)} className= "button buttonONE">1</button>
                <button onClick={() => setOpenPopTWO(true)} className= "button buttonTWO">2</button>
                <button onClick={() => setOpenPopTHREE(true)} className= "button buttonTHREE">3</button>
                <button onClick={() => setOpenPopFOUR(true)} className= "button buttonFOUR">4</button>
                <button onClick={() => setOpenPopFIVE(true)} className= "button buttonFIVE">5</button>
                <button onClick={() => setOpenPopSIX(true)} className= "button buttonSIX">6</button>
                <button onClick={() => setOpenPopSEVEN(true)} className= "button buttonSEVEN">7</button>
                <button onClick={() => setOpenPopEIGHT(true)} className= "button buttonEIGHT">8</button>
                <img src = "../hitmap.jpeg" alt = "" className="background-image"></img>
            </div>

            {openPopONE && (
                <div className="popup">
                    <h1>Info about building 1</h1>
                    <button onClick={() => setOpenPopONE(false)}>X</button>
                </div>
            )}
            {openPopTWO && (
                <div className="popup">
                    <h1>Info about building 2</h1>
                    <button onClick={() => setOpenPopTWO(false)}>X</button>
                </div>
            )}
            {openPopTHREE && (
                <div className="popup">
                    <h1>Info about building 3</h1>
                    <button onClick={() => setOpenPopTHREE(false)}>X</button>
                </div>
            )}
            {openPopFOUR && (
                <div className="popup">
                    <h1>Info about building 4</h1>
                    <button onClick={() => setOpenPopFOUR(false)}>X</button>
                </div>
            )}
            {openPopFIVE && (
                <div className="popup">
                    <h1>Info about building 5</h1>
                    <button onClick={() => setOpenPopFIVE(false)}>X</button>
                </div>
            )}
            {openPopSIX && (
                <div className="popup">
                    <h1>Info about building 6</h1>
                    <button onClick={() => setOpenPopSIX(false)}>X</button>
                </div>
            )}
            {openPopSEVEN && (
                <div className="popup">
                    <h1>Info about building 7</h1>
                    <button onClick={() => setOpenPopSEVEN(false)}>X</button>
                </div>
            )}
            {openPopEIGHT && (
                <div className="popup">
                    <h1>Info about building 8</h1>
                    <button onClick={() => setOpenPopEIGHT(false)}>X</button>
                </div>
            )}
        </div>
    );
}

export default Pop;