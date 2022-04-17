import React from "react";
import AllCards from "../Cards/AllCards";

function Business() {
  return (
    <div>
      <AllCards ttype='https://newsapi.org/v2/top-headlines?country=il&category=business&apiKey=66fe6a53463a4af9a88b861510ee56af' />
    </div>
  );
}

export default Business;
