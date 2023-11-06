import React, { useState } from "react";
import './BoardSelection.css';
import axios from 'axios';
import {useData} from '../contextManager'

const BoardSelection = () => {
    const { updateData } = useData();
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorSelection = (color) => {
        setSelectedColor(color);
        // Do something with the selected color
        console.log('Selected Color:', selectedColor); // Use the parameter 'color' instead of 'selectedColor'
    };

    const handleSubmit = async() => {
        if(selectedColor==null || boardName.size==0 || boardName==''){
            window.alert("please fill all the fields")
        }
        else{
        const colorCircle = document.querySelector(`.${selectedColor}`); // Replace with the appropriate selector
        const computedStyles = getComputedStyle(colorCircle);
        const backgroundColor = computedStyles.backgroundColor;
        const boardFeat = { "color": backgroundColor, "boardName": boardName }
        // Do something with the selected color
        const res= await axios.post('http://localhost:3001/board', boardFeat);
        updateData(boardFeat)
        console.log(res);
        setBoardName('');
        setSelectedColor(null);
    }
    }
    const [boardName, setBoardName] = useState('');
    const changeHandle = (e) => {
        setBoardName(e.target.value);
    }

    return (
        <div className="ModalBox">
            <form>
                <input type="text" placeholder="Enter Board Name" onChange={changeHandle} required="true"/><br />
                <h3 style={{ marginTop: "30px" }}>Select post colour</h3>
                <p>Here are some templates that help you get started</p>
                <label>
                    <div
                        className={`color-circle one ${selectedColor === 'one' ? 'selected' : ''}`}
                        data-color="one"
                        onClick={() => handleColorSelection('one')}
                    ></div>
                </label>
                <label>
                    <div
                        className={`color-circle two ${selectedColor === 'two' ? 'selected' : ''}`}
                        data-color="two"
                        onClick={() => handleColorSelection('two')}
                    ></div>
                </label>
                <label>
                    <div
                        className={`color-circle three ${selectedColor === 'three' ? 'selected' : ''}`}
                        data-color="three"
                        onClick={() => handleColorSelection('three')}
                    ></div>
                </label>
                <label>
                    <div
                        className={`color-circle four ${selectedColor === 'four' ? 'selected' : ''}`}
                        data-color="four"
                        onClick={() => handleColorSelection('four')}
                    ></div>
                </label>
                <div className="submitButton" onClick={() => handleSubmit()} >Create Board</div>
            </form>
        </div>
    );
};

export default BoardSelection;
