import React from "react";
import { useLoading } from "./LoadingContext";
import { Link } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";
import "../../styles/Header.css";

function Header() {
  const { loading } = useLoading();
  return (
    <div className="header-container">
      <h1 className="header-title">
        <Link to="/" className="no-underline">
          Podcaster
        </Link>
      </h1>
      {loading && <LoadingIndicator />}
    </div>
  );
}
export default Header;
