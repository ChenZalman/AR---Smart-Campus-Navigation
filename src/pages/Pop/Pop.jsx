import './Pop.css';
import { useState } from "react";
import { useBuildingContext } from 'Hooks/useBuildingContext';

function Pop() {
    const [openPopONE, setOpenPopONE] = useState(false);
    const [openPopTWO, setOpenPopTWO] = useState(false);
    const [openPopTHREE, setOpenPopTHREE] = useState(false);
    const [openPopFOUR, setOpenPopFOUR] = useState(false);
    const [openPopFIVE, setOpenPopFIVE] = useState(false);
    const [openPopSIX, setOpenPopSIX] = useState(false);
    const [openPopSEVEN, setOpenPopSEVEN] = useState(false);
    const [openPopEIGHT, setOpenPopEIGHT] = useState(false);
    const {dispatch} = useBuildingContext()

    function OncClickOne () {
        setOpenPopONE(true)
        dispatch({type: 1 , payload: {discription: "בניין מספר אחת הבניין הראשון במכון הטכנולוגי חולון"}})
    }
    function OncClickTwo () {
        setOpenPopTWO(true)
        dispatch({type: 2 , payload: {discription: "בניין מספר שתיים הבניין השני במכון הטכנולוגי חולון"}})
    }
    function OncClickTHREE () {
        setOpenPopTHREE(true)
        dispatch({type: 3 , payload: {discription: "בניין מספר שלוש הבניין השלישי, שם יושבת יחידת מחשוב, יש מעבדות מחשבים והנהלת המכון"}})
    }
    function OncClickFOUR () {
        setOpenPopFOUR(true)
        dispatch({type: 4 , payload: {discription: "בניין מספר ארבע אחד מהבניינים של תארי העיצוב שלומדים במכון"}})
    }
    function OncClickFIVE () {
        setOpenPopFIVE(true)
        dispatch({type: 5 , payload: {discription: "בניין מספר חמש הבניין המרכזי של המכון שם יש קפיטריה ומשרדי האגודה"}})
    }
    function OncClickSix () {
        setOpenPopSIX(true)
        dispatch({type: 6 , payload: {discription: "בניין מספר שש אחד מהבניינים של תארי העיצוב שלומדים במכון"}})
    }
    function OncClickSSeven () {
        setOpenPopSEVEN(true)
        dispatch({type: 7 , payload: {discription: "בניין מספר שבע אחד מהבניינים של תארי העיצוב שלומדים במכון"}})
    }
    function OncClickEight () {
        setOpenPopEIGHT(true)
        dispatch({type: 8 , payload: {discription: "בניין מספר שמונה הבניין של מדעי המחשב והנדסה. הבניין שבו אנו לומדים רוב הזמן"}})
    }
    function OncClickNine () {
        setOpenPopTWO(true)
        dispatch({type: 9 , payload: {discription: "בניין מספר תשע הבניין שעתיד להיבנות בתקופה הקרובה"}})
    }

    return (
        // <div className="center-container">
        <div className=" center-container rounded-[40px] bg-teal-100 border-2 border-teal-300 p-[30px] shadow-lg">
            <div className = "image-container">
                <button onClick={() => OncClickOne()} className= "button buttonONE">1</button>
                <button onClick={() => OncClickTwo()} className= "button buttonTWO">2</button>
                <button onClick={() => OncClickTHREE ()} className= "button buttonTHREE">3</button>
                <button onClick={() => OncClickFOUR ()} className= "button buttonFOUR">4</button>
                <button onClick={() => OncClickFIVE ()} className= "button buttonFIVE">5</button>
                <button onClick={() => OncClickSix ()} className= "button buttonSIX">6</button>
                <button onClick={() => OncClickSSeven ()} className= "button buttonSEVEN">7</button>
                <button onClick={() => OncClickEight ()} className= "button buttonEIGHT">8</button>
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