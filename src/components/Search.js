import React,{useState} from 'react';
import './Search.css';
import {Card} from 'react-bootstrap'
import './Search.css';


const Search= () => {
    const[username, setusername]= useState("");
   const[ data , Setdata] = useState({});
   const[ foll , Setfoll] = useState({});
   const[ prepo , Setrepo] = useState({});
   const[ pgist , Setgist] = useState({});
   const[ name , Setname] = useState({});
   const[ location , Setloc] = useState({});
   
   const handle = e =>{
       setusername(e.target.value);
   }; 
   const find = async e =>{
       e.preventDefault();
   const pro = await fetch(`https://api.github.com/users/${username}`)
   const projson = await pro.json();
   console.log(projson);
  
   if(projson){
       Setdata(projson);
       Setfoll(projson);
       Setrepo(projson);
       Setgist(projson);
       Setname(projson);
       Setloc(projson);

   }
   }
        return(
            <div>     
              <input className="c" type="text" placeholder="git username" value={username} onChange={handle}/>
            <button type="submit" onClick={find}> Compare</button>
            <Card className="cs">
  
    <Card.Body>
    <Card.Title id="t">Profile</Card.Title>
    <Card.Text>
    <p>Name-{name.name}</p>
       <p>Location-{location.location}</p>
        <p>Followers-{data.followers}</p>
       <p>Following-{foll.following}</p>
       <p>Public Repos-{prepo.public_repos}</p>
       <p>Public Gist-{pgist.public_gists}</p>
    </Card.Text>
    </Card.Body>
    </Card>
 
            

            </div>
        )
    }
export default Search;