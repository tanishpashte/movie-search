import React, { useState } from 'react';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("All");
  const options = ["All", "Movies", "Web Series"];

  return (
    <div className='mt-8 p-2 px-4 rounded-full bg-slate-800 text-center flex items-center'>
      <select 
        value={selectedOption} 
        onChange={(e) => setSelectedOption(e.target.value)}
        className='bg-slate-800'
        >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;