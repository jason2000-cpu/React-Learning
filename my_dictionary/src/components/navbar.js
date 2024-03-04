import React, { Component } from 'react'



export default class Navbar extends Component {
  render() {
    return (
      <div style={{display: "flex", alignItems:'center', border: "1px solid black", height: "3rem", paddingInline:"5rem"}}>
        <div className='logo' style={{marginRight:"33rem"}}>
            LOGO
        </div>
        <div className='banner' style={{fontWeight:"bold", fontFamily:"fantasy", fontSize:"30px"}}> English Dictionary</div>
      </div>
    )
  }
}
