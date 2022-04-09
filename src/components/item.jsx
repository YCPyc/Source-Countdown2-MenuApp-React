import React from 'react';

const menuItem = props =>{

    return(
        <div className="menuItem">
            <h2>{props.title}</h2>
            {props.vtab == true ?  
            (props.menu[props.title].map((item,i)=><p key={i}>{item["food"]}(${item["price"]})</p>))
            : 
    (props.menu[props.title].map((item,i)=> item["vegetarian"] == true ? (<p key={i}>{item["food"]}(${item["price"]})</p>) : null) )
            }
           

        </div>
    )
}

export default menuItem;