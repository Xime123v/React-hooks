import React, { useState,useEffect} from 'react';
import '../Main/Main.css';

export const Main = ()=>{

    const [count, setCount] = useState(0);
    const [style, setStyle] = useState('red')

    useEffect(() => {
        if (count >= 10){
            setStyle('red')
        }else{
            setStyle('green')
        }
    },[count])

    return(
        
       <div className='box'>
        <h1>Taller hooks</h1>
        <div>
            <h2 className={style}>{count}</h2>
           <button onClick={() => setCount(count + 1)}>add</button>
           <button onClick={() => setCount(0)}reset>Reset</button>
           <button onClick={() => setCount(count - 1)}>substratc</button>
        </div>
       </div>
    )
}