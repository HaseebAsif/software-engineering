import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-end hidden md:block">
      <div>February 17, 2023</div>
      <div>
        <img
          src="https://i1.wp.com/softwareengineeringdaily.com/wp-content/uploads/2022/01/cropped-logo-new.png?fit=296%2C139&ssl=1"
          alt=""
        />
      </div>
      <div>
        <div className="text-end">
          <ul>
            <li>Subscribe</li>
            <li>Newletter</li>
            <li>Subscribe</li>
            <li>Newletter</li>
          </ul>
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="search here"
          className="border border-sky-500 mt-6"
        />
      </div>
    </div>
  );
};

export default Header;
