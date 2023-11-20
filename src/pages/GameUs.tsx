import SwiperComponent from "../components/SwiperComponent"
import styled from "styled-components"
import {useState} from "react";
import {Link} from "react-router-dom";
import "./GameUs.css"
export default function GameUs() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const [games, setGames] = useState([
        {id: 0, name: '게임', section: ''},
        {id: 1, name: '게임', section: ''},
        {id: 2, name: '게임', section: ''},
        {id: 3, name: '게임', section: ''},
        {id: 4, name: '게임', section: ''},
        {id: 5, name: '게임', section: ''},
        {id: 6, name: '게임', section: ''},
        {id: 7, name: '게임', section: ''},
        {id: 8, name: '게임', section: ''},
        {id: 9, name: '게임', section: ''},
        {id: 10, name: '게임', section: ''},
        {id: 11, name: '게임', section: ''},
        {id: 12, name: '게임', section: ''},
        {id: 13, name: '게임', section: ''},
        {id: 14, name: '게임', section: ''},
        {id: 16, name: '게임', section: ''},
        {id: 17, name: '게임', section: ''},
        {id: 18, name: '게임', section: ''},
        {id: 19, name: '게임', section: ''},
        {id: 20, name: '게임', section: ''},
        {id: 21, name: '게임', section: ''},
        {id: 22, name: '게임', section: ''},
        {id: 23, name: '게임', section: ''},
        {id: 24, name: '게임', section: ''},
        {id: 26, name: '게임', section: ''},
        {id: 27, name: '게임', section: ''},
        {id: 28, name: '게임', section: ''},
        {id: 29, name: '게임', section: ''},
    ])
    return (
        <div className="game_wrap">
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="game_genre"
                >
                    <ul>
                        {isHovered ? <p>
                            <li><Link to="/web">퍼즐 / 두뇌</Link></li>
                            <li><Link to="/web">액션 </Link></li>
                            <li><Link to="/web">장르3</Link></li>
                        </p> :
                        <p> 장르별 게임 보기 </p>
                    }
                    </ul>
                </div>
            <div className="game_section">
                    {games.map((value => (
                    <>
                      <div>
                          <Link to="/">
                          <img src="https://cdn.pixabay.com/photo/2023/11/05/15/24/autumn-8367628_640.jpg" alt="이미지" className="game_zone"/>
                          </Link>
                          <br/>
                          <div className="game_info">{value.name}</div>
                      </div>
                    </>
                    )))}
            </div>

            { /*<div className="radius_right"></div>*/ }
            { /*<div className="spiral"></div>*/ }
            { /*<div className="triangle"></div>*/ }
        </div>
    )
}


const Header = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;

  .logo {
    margin: 0 1rem;
    font-size: 2rem;
  }

  .web_game {
    display: none;
  }
  a {
  color: white;
  text-decoration: none;
  }
  .header__menulist {
    list-style: none;
    display: flex;
  }

  .header__left {
    display: flex;
  }

  .header__right {
    list-style: none;
    display: flex;
  }

  .header__right div {
    margin: 0 1rem;
  }

  li {
    padding: 0 1rem;
  }

  .toggle {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }

  .user {
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
  }
    .header__menulist li,
    .header__right li {
      margin: 1rem 0;
      padding: 0;
    }

    .toggle {
      display: block;
    }

    .user {
      display: block;
    }
    .fresh_right {
        width: 50px;
        height: 50px;
        border-radius: 100px;
        background-color: red;
    }
    .radius_right {
    }
  }
`;
