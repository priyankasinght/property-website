import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <span className="open">Rent</span>
        <span>Buy</span>
        <span>Sell</span>
      </div>
      <div className="right">
        <button className="login">Login</button>
        <button className="signup">Sign up</button>
      </div>
    </div>
  );
}

export default Header;
