import React, {useState } from "react";
import Image from 'next/image'
import  Link from 'next/link';
import Style from './Card.module.css'
import images from '../Image/client/index';
import imagesNFT from '../Image/index'

const Card = ({setNotification , image , index}) => {
  return (
<div class={Style.card}>
<div class={Style.content}>
{ /* <a 
  href={`/image/${image.imageID}`}>  */}
  <a href={`/image/1`}>
<p>
<Image
className={Style.image}
src={imagesNFT.img1}
alt='ds'
width={250}
height='200'
/>
</p>
</a>
<span>
<Image
className="avatar_img"
src={images[`client${index+1}`]}
width={40}
height={40}
/>

<small
className={Style.para_small}
onClick={()=>(
  setNotification("Copy"),
/*   navigator.clipboard.writeText(image.owner)
 */
navigator.clipboard.writeText("copy")

)}
>
Owner Rizwan...
{/* {image.owner.slice(0 , 25)}... */}
</small>
</span>

<span>
12 2202 22

{/* CreateAt:{new Date(image.createdAt*1000).toDateString()} */}
{/* <small className={Style.number}>#{image.imageID}</small> */}
<small>#1</small>
</span>
{/* <small className={Style.para}>{image.description.slice(0 , 80)}..</small>
 */}
 <small className={Style.para}>
 lorem - wait compiling...
 - event compiled successfully in 389 ms (2058 modules)
 - wait compiling...
 </small>

<button 
onClick={()=>( setNotification(" Successfully COpy" ),
/* navigator.clipboard.writeText(image.image)
 */
 navigator.clipboard.writeText("overall")

)}
className={Style.btn}
>COpy URl
</button>
</div>


</div>

  )
};

export default Card;
