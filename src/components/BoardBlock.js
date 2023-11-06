import React from "react";
import "./BoardBlock.css";
import { BiDotsVertical, BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from "react";
import axios from "axios";
import { useData } from "../contextManager";
import { Link } from "react-router-dom";

const BoardBlock = (props) => {
    const { updateData,dataVal } = useData();
    const iconStyle = {
        marginRight: '5px',
        fontSize: '25px',
        position:'relative',
    };
    const [boards, setBoards] = React.useState([]);
    const fetch = async () => {
        const response = await axios.get('http://localhost:3001/board')
        setBoards(response.data);
        console.log(response.data)
    }
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
    return (
        <div className="boardBlock">
            <div className="boardBlock1" style={{background:props.color}}>
                <div></div>
            </div>
            <div className="boardBlock2">
                <div className="boardBlock3">
                <Link to={`/posts`}><p>{props.boardName}</p></Link>
                </div>
                <div className="boardBlock4">
                    <BiDotsVertical style={iconStyle} onClick={toggleDropdown} />
                    {isDropdownOpen &&
                        <div className="dropdown">
                            <div className='dropdownMenu'>
                                <BiEditAlt style={iconStyle} />
                                <p> Edit</p>
                            </div>
                            <div className='dropdownMenu' onClick={()=>{
                                axios.delete(`http://localhost:3001/board/${props.id}`);
                                fetch();
                                updateData(boards)}}>
                                <RiDeleteBin6Line style={iconStyle} />
                                <p> Delete</p>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    )
}
export default BoardBlock;