import React from 'react';
import '../Cart/Cart.css'

const Cart = (props) => {
    const selected = props.selected;
    console.log(props.selected);
    let total = 0;
    
   
    
    for (let i = 0; i < selected.length; i++) {
        
       
            
            total = selected[i].price + total;   
        
    }
    return (
        <div className='cart'>
            <p className="courseadded">Course Added: {selected.length}</p>
            <p className="totalprice">Total Price: ${total}</p>
            <button className="btn btn-info">Review Order</button>
        </div>
    );
};

export default Cart;