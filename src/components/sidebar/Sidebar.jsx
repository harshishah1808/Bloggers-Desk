import { Link } from "react-router-dom"
import axios from "axios"
import {useEffect,useState} from "react";
import "./sidebar.css"

export default function Sidebar() {
    const [cats,setCats]=useState([]);

    useEffect(()=>{
        const getCats=async()=>{
            const res=await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    },[]);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg">
                </img>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                </p>
            </div>
            <div className="sidebarItem" >
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c)=>(
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i class="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i class="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i class="sidebarIcon fa-brands fa-pinterest-square"></i>
                    <i class="sidebarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
