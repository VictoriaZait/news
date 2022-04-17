import React from "react";
import FlashCards from "../Cards/FlashCards";

function FlashNews() {

  return (
 <div>
      <FlashCards ttype='https://newsapi.org/v2/top-headlines?country=il&apiKey=66fe6a53463a4af9a88b861510ee56af' />
 </div>
  );
}

export default FlashNews;


