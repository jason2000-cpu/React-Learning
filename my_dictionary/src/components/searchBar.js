import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        searchWord: ""
    }

    handleSearch = (e)=>{
        e.preventDefault();
        console.log(this.state.searchWord)
    }

  render() {
    return (
      <div style={{marginTop:"5rem",display: "flex", justifyContent:"center", height:"70vh"}}>
        <form onSubmit={this.handleSearch}>
            <input 
            placeholder='Search word...' 
            style={{width:"18rem", height:"2rem", fontSize:"1.3rem"}} 
            required 
            name='searchword'
            value={this.state.searchWord}
            onChange={(e)=>this.setState({searchWord: e.target.value})}
            />
            <button style={{width: "4rem", height:"40px", marginLeft: "0px"}}>Search</button>
        </form>
      </div>
    )
  }
}
