import React, { Component } from 'react'

const styles = {
    button: {
        cursor:"pointer",
        fontSize: "30px",
        borderRadius: "5px",
        width: "8rem",
    },
    liked: {
        backgroundColor: "rgba(0, 0, 255, .5",
        cursor:"pointer",
        fontSize: "30px",
        borderRadius: "5px",
        width: "8rem",
    }
}

export default class Counter extends Component {
    state = {count : 0, liked: false}

    clickHandler = ()=>{
        this.setState({
            count: this.state.liked ? this.state.count - 1 : this.state.count + 1,
            liked: !this.state.liked
        })
    }
    
  render() {
    return (
      <div style={{ height:"70vh",display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div style={{marginRight:"2rem"}}>
            Counter | {this.state.count}
        </div>
         <div>
            <button style={this.state.liked ? styles.liked  : styles.button} onClick={this.clickHandler} >Click</button>
         </div>
      </div>
    )
  }
}


