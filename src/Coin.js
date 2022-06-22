import { useState } from 'react';
import './coin.css';
const Coin = () => {
    const [side,setSide] = useState({coin:'head.jpg',flips:0,heads:0,tails:0});
    function toggle() {
        if (side.coin === 'head.jpg'){
            setSide((currValue) => {
                return {...currValue,coin:'tail.jpg',flips:currValue.flips + 1,tails:currValue.tails + 1}
            });
        }
            
        else {
            setSide((currValue) => {
              return {
                ...currValue,
                coin: "head.jpg",
                flips: currValue.flips + 1,heads:currValue.heads + 1,
              };
            });
        }
    }
    return (
        <div className='coin-container'>
            <img src={side.coin} className="coin" alt="" />
            <button onClick={toggle}>FLIP MEEEE</button>
            <p>Out of {side.flips}, there have been {side.heads} heads and {side.tails} tails</p>
        </div>
    );
}

export default Coin;