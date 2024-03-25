"use client"

import { useState } from 'react';
import { useDataStore } from "@Context/app-data";

const Slider = () => {

  const{idx,setIdx} = useDataStore()
  const [value, setValue] = useState(0);

  const handleOnChange = (idx) => {
    setValue(idx);
  };

  const trackStyle = {
    background: `linear-gradient(to right, #A729F5 0%, #A729F5 ${value}%, #d3d3d3 ${value}%, #d3d3d3 100%)`,
  };

  console.log(value)

  return (
    <div className="w-full flex pt-8">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleOnChange}
        className="range_slider"
        style={trackStyle}
      />
    </div>
  );
};

export default Slider;

