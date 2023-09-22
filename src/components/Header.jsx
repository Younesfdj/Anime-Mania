import { useState } from "react";
import { BsSearch, BsFunnel, BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import onePiece from "../assets/one-piece.jpg";
import onePunchMan from "../assets/one-punch-man.jpg";
import dragonBall from "../assets/dragon-ball.jpg";

const Header = () => {
  const [searchBarSelected, setSearchBarSelected] = useState(false);
  const handleSelect = () => {
    setSearchBarSelected(true);
  };
  return (
    <div className="landing-container">
      <div className="logo">Anime Mania</div>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="Home">Home</Link>
          </li>
          <li>
            <Link to="Trending">Trending</Link>
          </li>
          <li>
            <Link to="NewRealse">New Release</Link>
          </li>
          <li>
            <Link to="RecentUpdate">Recent Update</Link>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <form className="s-b-container" onSubmit={(e) => e.preventDefault()}>
          <div className="first-div">
            <BsSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search anime..."
            />
            <button className="clear-btn">Clear</button>
          </div>
          <div className="second-div">
            <div className="anime">
              <p>Anime</p>
            </div>
            <div className="filter">
              <BsFunnel />
              <button className="clear-btn filter-btn">Filter</button>
            </div>
          </div>
        </form>
        <div className="anime-container">
          <div className="anime">
            <img className="anime-cover" src={onePiece} />
            <div className="anime-info">
              <h3>One piece</h3>
              <ul
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <li>PG 13</li>
                <li>
                  <BsFillStarFill
                    style={{
                      color: "rgb(51, 50, 50)",
                      position: "relative",
                      top: "1px",
                    }}
                  />
                  {"  "}
                  8.95
                </li>
                <li>TV</li>
                <li>Oct 20,1999</li>
              </ul>
            </div>
          </div>
          <div className="anime">
            <img className="anime-cover" src={onePunchMan} />
            <div className="anime-info">
              <h3>One Punch Man</h3>
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <li>PG 13</li>
                <li>
                  <BsFillStarFill
                    style={{
                      color: "rgb(51, 50, 50)",
                      position: "relative",
                      top: "1px",
                    }}
                  />
                  {"  "}
                  8.95
                </li>
                <li>TV</li>
                <li>Oct 20,1999</li>
              </ul>
            </div>
          </div>
          <div className="anime">
            <img className="anime-cover" src={dragonBall} />
            <div className="anime-info">
              <h3>Dragon Ball Z</h3>
              <ul
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <li>PG 13</li>
                <li>
                  <BsFillStarFill
                    style={{
                      color: "rgb(51, 50, 50)",
                      position: "relative",
                      top: "1px",
                    }}
                  />
                  {"  "}
                  10
                </li>
                <li>TV</li>
                <li>Oct 20,1999</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
