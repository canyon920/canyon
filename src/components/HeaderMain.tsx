export default function HeaderMain(){
    return (
        <div> gg </div>
    )
}
// import { useState } from "react"
// import styled from "styled-components"
// import {Link} from "react-router-dom"
// import {auth} from "../firebase"
// import {useEffect} from "react";
//
// interface HeaderProps {
//     isToggled: boolean;
//     userToggled: boolean;
// }
//
// function HeaderMain() {
//     const [isToggled, setIsToggled] = useState(false);
//     const [userToggled, setUserToggled] = useState(false);
//     console.log("인증", auth.currentUser);
//     const [IS_LOGGED_IN, SET_IS_LOGGED_IN]: any= useState("로그인");
//     console.log(IS_LOGGED_IN);
//     return (
//         <Header isToggled={isToggled} userToggled={userToggled}>
//             {/* 햄버거 버튼(bar) */}
//             <div
//                 className="toggle"
//                 onClick={() => {
//                     setIsToggled(!isToggled);
//                 }}
//             >
//                 {/*<FontAwesomeIcon icon={!isToggled ? "Hello" : faTimes} />*/}
//                 {/*<FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />*/}
//             </div>
//
//             <div className="logo">
//                 {/*<FontAwesomeIcon icon={faApple} />*/}
//                 Just Game Machine
//                 {/*<FontAwesomeIcon icon={faApple} />*/}
//             </div>
//
//             {/* User 버튼 */}
//             <div
//                 className="user"
//                 onClick={() => {
//                     setUserToggled(!userToggled);
//                 }}
//             >
//                 {/*{!userToggled ? "Hello" : "false"}*/}
//                 {/*<FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />*/}
//             </div>
//
//             <ul className="header__menulist">
//                 <li><Link to="/"> Home</Link></li>
//                 <li>Context</li>
//                 <li><Link to="/playUs"> play Us</Link></li>
//             </ul>
//
//             <ul className="header__right">
//                 <li><Link to="/login">{IS_LOGGED_IN}</Link></li>
//                 <li><Link to="/register">SignUp</Link></li>
//             </ul>
//         </Header>
//     );
// }
//
// const Header = styled.div<HeaderProps>`
//   max-width: 100%;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   color: white;
//   background-color: black;
//
//   .logo {
//     margin: 0 1rem;
//     font-size: 2rem;
//   }
//
//   a {
//   color: white;
//   text-decoration: none;
//   }
//   .header__menulist {
//     list-style: none;
//     display: flex;
//   }
//
//   .header__left {
//     display: flex;
//   }
//
//   .header__right {
//     list-style: none;
//     display: flex;
//   }
//
//   .header__right div {
//     margin: 0 1rem;
//   }
//
//   li {
//     padding: 0 1rem;
//   }
//
//   .toggle {
//     display: none;
//     font-size: 1.5rem;
//     padding: 1rem 1rem;
//   }
//
//   .user {
//     display: none;
//     font-size: 1.5rem;
//     padding: 1rem 1rem;
//   }
//
//   @media screen and (max-width: 768px) {
//     flex-wrap: wrap;
//
//     .header__right {
//       display: ${(props) => (props.userToggled ? "flex" : "none")};
//       flex-direction: column;
//       width: 100%;
//       background-color: black;
//     }
//
//     .header__menulist {
//       display: ${(props) => (props.isToggled ? "flex" : "none")};
//       flex-direction: column;
//       width: 100%;
//       background-color: black;
//     }
//
//     .header__menulist li,
//     .header__right li {
//       margin: 1rem 0;
//       padding: 0;
//     }
//
//     .toggle {
//       display: block;
//     }
//
//     .user {
//       display: block;
//     }
//   }
// `;
//
// export default HeaderMain;
