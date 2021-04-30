import { getDefaultNormalizer } from "@testing-library/dom";
import "./Navigation.css"
import React from "react";
import { Link } from "react-router-dom";

// a href는 HTML, 페이지를 새로고침 해버린다.
// 그러므로 react-router-dom의 Link를 쓰자.

function Navigation(){
    return (
        <div className="nav"> 
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
        );
}
export default Navigation;