import React,{useContext} from 'react';
import { atomicContext } from '../Contexts/atomicContexts';


function Tile(props){ 
    const { setEle } = useContext(atomicContext);
    return <div className='tile'  onClick={clicked} >
        <div className='atomicNum'  style={{backgroundColor:props.test}}>
            <p>{props.number}</p>
        </div>
        <div className='atomicSymbol' style={{backgroundColor:props.test}}>
            <h1> {props.symbol}</h1>
        </div>
        <div className='atomicName'  style={{backgroundColor:props.test}}>
            <h2>{props.name}</h2>
        </div>
    </div>
    
    function clicked(){
        
        setEle(props.number);
    }
}




export default Tile;