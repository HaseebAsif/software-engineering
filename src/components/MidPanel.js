import React from "react";

const MidPanel = () => {
  return (
    <div className="bg-yellow-300 lg:col-span-2 mx-auto border-x-4 border-indigo-500 px-6 h-[150vh]">
      <div>
        <img
          className="mx-auto"
          src="https://i1.wp.com/softwareengineeringdaily.com/wp-content/uploads/2023/02/Group-225.png?resize=540%2C364&ssl=1"
          alt=""
        />
      </div>
      <div className="border-b-4  border-indigo-500">
        <h3 className="text-4xl">Pebbled with Kieth Adams</h3>
        <p>
          Keith Adams has worked previously at Facebook and has also been a
          Chief Architect at Slack. He joins us today to discuss technology,
          startups, investing, and like all conversations that exist today,
          ChatGPT.
        </p>
      </div>
      <div className="bg-gray-300 h-80 w-full"></div>
    </div>
  );
};

export default MidPanel;
