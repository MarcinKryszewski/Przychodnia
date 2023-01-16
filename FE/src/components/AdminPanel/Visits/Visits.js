import React, { Component, useState } from 'react'
import axios from 'axios';

function Visits() {

  const TestClick = async () => {
    console.log("aaaaaaaa");
    const tst = await axios.get("http://localhost:3001/api/visits");
    console.log(tst);
    console.log(tst.data);
  };

    return (
      <div>
        <button onClick={TestClick}>TEST</button>
      </div>
    )
}

export default Visits