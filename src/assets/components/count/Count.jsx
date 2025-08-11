import { useState } from "react";

function Count(){
    const [count, setCount] = useState(0);

    return (
        <div>
            {/* 1st try! but i will use prev, 
                also if less than 0 not count 1 number.
               
            <button onClick={()=> setCount(count + 1)}>+</button>
            <p>{count}</p>
            <button onClick={()=> setCount(count - 1)}>-</button>
            */}
            <button onClick={()=> setCount(prev => Math.max(0, prev - 1))}>-</button>
            <p>{count}</p>
            <button onClick={()=> setCount(prev => prev + 1)}>+</button>
            {/*or can disable button when at 0 with disabled. interestingggg!!
              <button 
              onClick={()=>setCount(prev => prev - 1)}
              disabled={count === 0}         
              >-</button>
            
            */}
        </div>
    )
}

export default Count 