import React, { useState, useEffect } from 'react';
import './Counter.css'
import axios from 'axios'

function Counterquote() {
  const maxCount = 10;
  const minCount = 0;

  const [currentCount, setCurrentCount] = useState(0);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    if (currentCount === maxCount || currentCount === maxCount /2 ) {
      fetchquote();
    }
  }, [currentCount]);
  const fetchquote = () => {
    axios.get('https://api.quotable.io/quotes/random')
    .then(response => {
      setQuote(response.data[0].content);
      // console.log(quote)
    })
    
  };
  const checkIncrement = () => {
    if (currentCount < maxCount) {
      setCurrentCount(prevCount => prevCount + 1);
    }
  };
  const checkDecrement=()=>{
    if(currentCount>minCount){
      setCurrentCount(prevCount => prevCount - 1);
    }
  }
  return (
    <>
   <div className="counter-widget">
      
      <button className="increment" onClick={checkIncrement}>Increment</button>
      <div className="count">{currentCount}</div>
      
    
       {
    (currentCount <= 0) ? <button className="decrement" disabled onClick={checkDecrement}>Decrement</button>:<button className="decrement" onClick={checkDecrement}>Decrement</button>
       }
        
        {(currentCount === 5 || currentCount===10 ) ?
          (<div className="quote">{quote}</div>)
          :""
        }
        
   </div>
    </>
  )
}

export default Counterquote
