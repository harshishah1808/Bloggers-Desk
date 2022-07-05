import { Link } from "react-router-dom";
import "./topbar.css";
import {Context} from "../../context/Context";
import { useContext } from "react";

export default function TopBar() {
  const {user, dispatch}=useContext(Context)
  const PF="http://localhost:5000/images/" 

  const handleLogout=()=>{
    dispatch({type:"LOGOUT"});
  }
  return (
    <div className="top">
      <div className="topLeft">
        <i class="topIcon fa-brands fa-facebook-square"></i>
        <i class="topIcon fa-brands fa-twitter-square"></i>
        <i class="topIcon fa-brands fa-pinterest-square"></i>
        <i class="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
          {user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <Link to="/settings">
            <img
              className="topImg"
              src={PF+user.profilePicture}
              alt="" />
              </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
