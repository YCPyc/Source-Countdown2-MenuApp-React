import React,{ useState } from "react";
import MenuItem from './item';



const Menu = () => {
    const[veggie,setvegggie] = useState(true);
    const menuInfo = {
        "breakfast": [
          {"food": "pancakes", "price": 5.00, "vegetarian": true},
          {"food": "waffles", "price": 5.00, "vegetarian": true},
          {"food": "orange juice", "price": 2.00, "vegetarian": true}
        ],
        "lunch": [
          {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
          {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
          {"food": "hamburger", "price": 8.00, "vegetarian": false}
        ],
        "dinner": [
          {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
          {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
          {"food": "chili", "price": 8.00, "vegetarian": false}
        ]
      };
      
    return(
        <div className="menuBody">
            <h1>Menu</h1>
            {veggie ? <button onClick={()=>{setvegggie(false)}}>Show Only Vegetarian</button> :  <button onClick={()=>{setvegggie(true)}}>Show All Food</button>}
            {Object.keys(menuInfo).map((key,i)=><MenuItem title={key} menu={menuInfo} key={i} vtab = {veggie}/>)}

        </div>
    );
}

export default Menu;