import React, { useState } from "react";

const App = () => {
  const [color, setcolor] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });

  const { red, green, blue } = color;

  return (
    <div className="w-full h-screen flex flex-col gap-5 items-center justify-center  px-4">
      <div
        className="w-full h-full max-w-80 max-h-80 bg-black"
        style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      ></div>
      <div className="flex items-center gap-3 flex-wrap justify-center">
        <div className="flex flex-col gap-1">
          <h2>Red : {red}</h2>
          <div>
            <input
              type="range"
              min={0}
              max={255}
              value={red}
              onChange={(e) => setcolor({ ...color, red: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2>Green : {green}</h2>
          <div>
            <input
              type="range"
              min={0}
              max={255}
              value={green}
              onChange={(e) => setcolor({ ...color, green: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2>Blue : {blue}</h2>
          <div>
            <input
              type="range"
              min={0}
              max={255}
              value={blue}
              onChange={(e) => setcolor({ ...color, blue: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
