import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
      
    }}>
      <input 
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input style= {{backgroundColor:'green', color: "white"}} type="submit" value="Add" />
      
    </form>
  );
}
