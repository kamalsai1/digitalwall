import React from "react";
import Navbar from './Navbar.js';
import BoardBlock from './BoardBlock.js';
import axios from 'axios';
import { useEffect } from "react";
import { useData } from '../contextManager.js'
import "./Home.css"
import { Link } from "react-router-dom";

const Home = () => {
    const { updateData,dataVal } = useData();
    const [boards, setBoards] = React.useState([]);
    const fetch = async () => {
        const response = await axios.get('http://localhost:3001/board')
        setBoards(response.data);
        console.log(response.data)
    }
    useEffect(() => {
        fetch();
    }, [dataVal])


    return (
        <div className="Home">
            <Navbar />
            <div style={{margin:"20px"}}><h1>My Boards</h1></div>
            <div className="blocks">
                {boards.map((x) =>
                    (<BoardBlock boardName={x.boardName} color={x.color} id={x.id} key={x.id}/>)
                )}
            </div>

        </div>
    )
}
export default Home;