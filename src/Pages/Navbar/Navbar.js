import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">LocalStorage</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
