import React from 'react';

const Cards = () => {
    return ( 
        <div className='container'>
            <h2>Stays in Finland</h2>
<div className='card_layout'>
    <div className='card_items'>
        <img src={`https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80`} alt='card' />
        <div className='card_des'>
            <button><p>SUPER HOST</p></button>
            <p2>Entire apartment. 2 beds</p2>
            <p3> 4.40</p3>
        </div>
        <h4>Stylist apartment in center of the city</h4>
    </div>
</div>
        </div>
     );
}
 
export default Cards;