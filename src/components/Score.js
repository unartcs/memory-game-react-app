import React, { useRef, useEffect, props } from "react";

function Score({ score, highScore }) {
  return (
    <div>
      Score: {score}<br/>
      High Score: {highScore}
    </div>
  );
}

export default Score;
