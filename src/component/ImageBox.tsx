'use client'
import Image from "next/image";
import {  useState } from "react"

const ImageBox = ({src, title, size = 'medium'}:{src:string, title:string, size?: 'small' | 'medium' | 'large' }) => {
    const [isHovered, setIsHovered] = useState(false);
     const componentSize = {
        small:40,
        medium: 80,
        large: 120
      }
      const imageSize = componentSize[size];
    return  (<div className="imageBox " 
   
   onMouseEnter={() => setIsHovered(true)}
   onMouseLeave={() => setIsHovered(false)}
   >
    <Image src={src} alt={""} width={imageSize} height={imageSize}/>
                <div className={`effect ${isHovered?'h-[100%]':'h-[0%]'}`}>
                    <span className ={`${isHovered?'visible':'hidden'}`} >{title}</span>
                </div>
          
   </div>)
}

export default ImageBox;