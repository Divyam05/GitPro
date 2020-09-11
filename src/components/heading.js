import React from 'react';
import './heading.css';
import logo from './logo.png';

const Head= () =>
{
  return  <div className="d1">
    <p id="logo"><img height="199px" src={logo}/></p>
    <h1>GitHubCompare<br></br>Search up for the Profile</h1>
  </div>
}
export default Head;