import React from "react";
import img1 from '../img2.jpg';
import './PostCard.css';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiDotsVertical, BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from "react";
import axios from "axios";
import { useData } from "../contextManager";


const PostCard = (props) => {
    const { updateData,dataVal } = useData();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [posts, setPosts] = React.useState([]);
    const fetch = async () => {
        const response = await axios.get('http://localhost:3001/posts')
        setPosts(response.data);
        console.log(response.data)
    }
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const date=new Date();
    const day= date.getDate();
    const month=date.getMonth()+1;
    const year=date.getFullYear();
    const iconStyle = {
        fontSize: '50px',
        position: 'relative',
    }
    const iconStyle1 = {
        marginRight: '5px',
        fontSize: '25px',
        position:'relative',
    };
    
    return (
        <div className="PostCard">
            <div className="PostHeader">
                <h2>{props.title}</h2>
                <div style={{display:"flex",gap:"20px"}}><BsBookmark style={{ iconStyle }} />
                <BiDotsVertical onClick={toggleDropdown}/>
                </div>
                {isDropdownOpen &&
                        <div className="dropdown">
                            <div className='dropdownMenu'>
                                <BiEditAlt style={iconStyle1} />
                                <p> Edit</p>
                            </div>
                            <div className='dropdownMenu' onClick={()=>{
                                axios.delete(`http://localhost:3001/posts/${props.id}`);
                                fetch();
                                updateData(posts)}}>
                                <RiDeleteBin6Line style={iconStyle1} />
                                <p> Delete</p>
                            </div>
                        </div>}
            </div>
            <p style={{marginTop:"0"}}>{day}-{month}-{year}</p>
            <div className="imageHeader"><img src={img1} alt="posts" /></div>
            <div className="PostContent">
                <p>{props.content}</p>
            </div>
            <div style={{marginTop:"450px",position:"absolute"}}><AiOutlineHeart /></div>
        </div>
    )
}
export default PostCard;