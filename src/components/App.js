import React, {useState} from 'react';
import Header from './header'
import TableHolder from './TableHolder';
import DataBox from './dataBox';
import {atomicContext} from '../Contexts/atomicContexts'

 
function App(){
  const [getEle, setEle] = useState(1);
  
  return <div>
    
      <Header/>
    <atomicContext.Provider value = {{getEle,setEle}}>
      <DataBox/>
      <TableHolder/>
    </atomicContext.Provider>
  </div>
};

export default App;