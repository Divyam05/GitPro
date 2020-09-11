import React from 'react'
import Search from './components/Search'
import './App.css';
import Head from './components/heading';
import one from './one.png';
import two from './two.png'

const App= () => {
 return  <div>
   <Head/>
   <Search/>
   <div id="lk">
     <img height="300" width="550" src={one}></img>
   </div>
   <div id="lu">
     <img height="300" width="550" src={two}></img>
   </div>
  

<footer className="footer">
<p className="foo">Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.<br></br>Address : C-134,SunderNagar,District Mandi <br></br>Himachal Pradesh<br></br>Pincode-175018 </p>
<a href="https://www.facebook.com/divyam.groverrahul" className="fa fa-facebook">.</a>
<a href="https://accounts.google.com/signin/v2/sl/pwd?service=CPanel&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="fa fa-google">.</a>
<a href="https://www.linkedin.com/in/divyam-grover-3ba9a7144/" className="fa fa-linkedin">.</a>
<p id="foo">Contact- +91-8988261503 +91-7018028471 <br></br>2020Copyright &copy;DivyamTech</p>

</footer>
 </div>
 

}
export default App;