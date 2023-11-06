import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaPlus, FaSearch } from 'react-icons/fa';
import './PostsMain.css'
import PostCard from "./PostCard";
import Modal from "./Modal";
import PostForm from "./PostForm";
import axios from "axios";
import { useData } from "../contextManager";
import { useParams } from "react-router-dom";

const PostsMain = (props) => {
    const { id } = useParams();
    const boardId = id;
    const {dataVal,updateData}=useData();
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const iconStyle = {
        marginRight: '5px'
    };
    const [posts, setPosts] = useState([]);
    const fetch = async () => {
        const response = await axios.get(`http://localhost:3001/posts/`)
        setPosts(response.data);
    }
    React.useEffect(() => {
        fetch();
    }, [dataVal])
    const [postColor, setPostColor] = useState([]);
    const fetchBoard=async()=>{
        const response = await axios.get(`http://localhost:3001/board/`)
        setPostColor(response.data.color);
    }
    React.useEffect(() => {
        fetchBoard();
    }, [setPosts])
    return (
        <div className="PostsHead" style={{background:postColor}}>
            <Navbar />
            <div className="Posts">
                <h2 style={{ margin: "20px" }}>Your Posts</h2>
                <div className='AddButton' onClick={openModal}>
                    <FaPlus style={iconStyle} />
                    <p>create new post</p>
                </div>
                <Modal isOpen={isOpen} onClose={closeModal} title="Create a new post">
                    <PostForm />
                </Modal>
            </div>
            <div className="postList">
            {posts.map((post)=> {
                return (
                    <PostCard id={post.id} key={post.id} title={post.subject} content={post.content} />)
            })}</div>
        </div>)
}
export default PostsMain;