import React from "react";
import ImageToggleOnMouseOver from "@/Components/ImageToggleOnMouseOver";

let ImageChangeOnMouseOver = ()=>{
    return (
        <div style={{display:'flex'}}>
            <ImageToggleOnMouseOver 
                primaryImg="/static/speakers/bw/Speaker-187.jpg"
                secondaryImg= "static/speakers/Speaker-187.jpg" 
                alt="speaker 187" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver 
            primaryImg="/static/speakers/bw/Speaker-1124.jpg" 
            secondaryImg="/static/speakers/Speaker-1124.jpg"
            alt="speaker 1124" />
        </div>
    )
}


export default function Page(){
    return <ImageChangeOnMouseOver />
}
