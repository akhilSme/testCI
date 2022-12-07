import React, { Component } from "react";
import "./styles.css";

class Header extends Component {
  render() {
    return (
      <div className="head-wrapper">
        <div class="text-center bg-gray-50 text-gray-800 header">
          {window.location.pathname === "/login" ||
            (window.location.pathname === "/signup" && (
              <h3 class="text-3xl font-bold mb-8">Weather App</h3>
            ))}

          {window.location.pathname !== "/login" &&
            window.location.pathname !== "/signup" && (
              <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "20%" }}>
                  <div className="heading">Weather App</div>
                </div>
                <div>
                  <ul className="nav">
                    <li>
                      <a href="/" title="Home">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/weatherhistory" title="Weather History">
                        Weather History
                      </a>
                    </li>
                    <li>
                      <a href="/admin" title="Admin">
                        Admin
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Logout">
                        Logout_
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default Header;
