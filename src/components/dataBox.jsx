import React, {useContext} from 'react';
import ReactDom from 'react-dom';
import {atomicContext} from '../Contexts/atomicContexts'


const ChemData = require('periodic-table');
console.log(ChemData)

function DataBox(){
    const { getEle } = useContext(atomicContext);
    
    return <div className="dataBox">
        <h1>
            Element: {ChemData.numbers[getEle].name}
            
        </h1>
        
        <h2>
           <ol>
               <li>Symbol: {ChemData.numbers[getEle].symbol}</li>
               <li>Atomic number: {ChemData.numbers[getEle].atomicNumber}</li>
               <li>Atomic mass: {ChemData.numbers[getEle].atomicMass}</li>
               <li>Bonding type: {ChemData.numbers[getEle].bondingType}</li>
               <li>Boiling point: {ChemData.numbers[getEle].boilingPoint}</li>
               <li>Melting point: {ChemData.numbers[getEle].meltingPoint}</li>
               <li>Group block: {ChemData.numbers[getEle].groupBlock}</li>
               <li>Year discovered: {ChemData.numbers[getEle].yearDiscovered}</li>
               
           </ol>
           <span></span>
        </h2>
    </div>
}

export default DataBox;