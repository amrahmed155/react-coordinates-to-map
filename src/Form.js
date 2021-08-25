// npm install --save --save-exact react-scripts@3.4.0


import React from "react";
import "./Form.css";
const requiredsample='*';
let pointcount=1;


export default function App() {
  


  return (
    <div className="testbox entry-form"   dir='rtl'>
       <form>
        <label>الأسم : <span className="required">{requiredsample}</span></label><br></br>
        <input type="text" required></input><br></br>
        <label>العنوان : <span className="required">{requiredsample}</span></label><br></br>
        <input type="text"required></input><br></br>
        <div className="contact-item">
          <div className="item">
            <label>خط اللول {pointcount}  :</label><br></br>
            <input type="number" step="any"></input><br></br>
          </div>
          <div className="item">
            <label>خط العرص {pointcount} :</label><br></br>
            <input type="number" step="any"></input><br></br>
          </div>
        </div>
        <button type="button" id='addpoint' >إضافة احداثيات اخري</button>
        <br></br><br></br>
        <button type="submit" id='submit'>submit</button>
       </form>
    </div>
  );
}

