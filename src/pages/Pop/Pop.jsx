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
                <img src = "../../../public/images/hitmap.jpeg" alt = "" className="background-image"></img>
            </div>

            {openPopONE && (
                <div className="popup">
                    <h1>Building #1</h1>
                    <br />
                    <img src = "../../../public/images/buildingOne.jpeg" alt = "" className="buildingOneImage"></img>
                    <button onClick={() => setOpenPopONE(false)}>X</button>
                </div>
            )}
            {openPopTWO && (
                <div className="popup">
                    <h1>Building #2</h1>
                    <br />
                    <img src = "../../../public/images/buildingTwo.jpeg" alt = "" className="buildingTwoImage"></img>
                    <button onClick={() => setOpenPopTWO(false)}>X</button>
                </div>
            )}
            {openPopTHREE && (
                <div className="popup">
                    <h1>Building #3</h1>
                    <br />
                    <img src = "../../../public/images/buildingThree.jpeg" alt = "" className="buildingThreeImage"></img>
                    <button onClick={() => setOpenPopTHREE(false)}>X</button>
                </div>
            )}
            {openPopFOUR && (
                <div className="popup">
                    <h1>Building #4</h1>
                    <br />
                    <img src = "../../../public/images/buildingFour.jpeg" alt = "" className="buildingFourImage"></img>
                    <button onClick={() => setOpenPopFOUR(false)}>X</button>
                </div>
            )}
            {openPopFIVE && (
                <div className="popup">
                    <h1>Building #5</h1>
                    <br />
                    <img src = "../../../public/images/buildingFive.jpeg" alt = "" className="buildingFiveImage"></img>
                    <button onClick={() => setOpenPopFIVE(false)}>X</button>
                </div>
            )}
            {openPopSIX && (
                <div className="popup">
                    <h1>Building #6</h1>
                    <br />
                    <img src = "../../../public/images/buildingSix.jpeg" alt = "" className="buildingSixImage"></img>
                    <button onClick={() => setOpenPopSIX(false)}>X</button>
                </div>
            )}
            {openPopSEVEN && (
                <div className="popup">
                    <h1>Building #7</h1>
                    <br />
                    <img src = "../../../public/images/buildingSeven.jpeg" alt = "" className="buildingSevenImage"></img>
                    <button onClick={() => setOpenPopSEVEN(false)}>X</button>
                </div>
            )}
            {openPopEIGHT && (
                <div className="popup">
                    <h1>Building #8</h1>
                    <br />
                    <img src = "../../../public/images/buildingEight.jpeg" alt = "" className="buildingEightImage"></img>
                    <button onClick={() => setOpenPopEIGHT(false)}>X</button>
                </div>
            )}
        </div>
    );
}

export default Pop;