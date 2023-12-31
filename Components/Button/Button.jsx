import React from "react";
import Style from "./Button.module.css"


const Button = ( {disconnect , connect , address , file}) => {
  return (
<>
{address ?(
  <button onClick={()=>disconnect() } className={Style.button}>
  <span className={Style.button_connect}>
  {""}
  {file? "Upload" :"Disconnect"}
  </span>
  
  </button>
): (<button className={Style.button} onClick={()=>connect()}>
<span class={Style.button_connect}>Connect</span>
</button>

  
)}


</>
  );
};

export default Button;
