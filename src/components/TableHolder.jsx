import React from 'react';
import ReactDom from 'react-dom';
import Tile from './Tile';
import HiddenTile from './hiddenTile';
const ChemData = require('periodic-table');

var chemArray = [];
var actLan = [];
var actL1 = 176;
var actL2 = 198;
var atomicNum = 0;


function TableHolder(){
    
    return <div className='PTable'>
        {addArray(), chemArray.map(addTile)}
    </div>
}


function addArray(){
    for(let x = 0; x < 209; x++){
        if((x > 1 && x < 18) || (x>20 && x < 31) || (x>38 && x < 49) || (x > 154 && x < 176) || (x > 193 && x < 197) ){
            chemArray[x-1] = []; 
        }else if(atomicNum > 56 && atomicNum < 72){
            if(atomicNum == 57){
                chemArray[x-1] = []; 
            }
            chemArray[actL1] = ChemData.numbers[atomicNum];
            actL1++;
            atomicNum++
        }
        else if(atomicNum > 88 && atomicNum < 104){
            if(atomicNum == 89){
                chemArray[x-1] = []; 
            }
            chemArray[actL2] = ChemData.numbers[atomicNum];
            actL2++;
            atomicNum++
        }
        else if(atomicNum < 119){
            chemArray[x-1] = ChemData.numbers[atomicNum]; 
            atomicNum++;
        }
    }
}

function addTile(data)
{   
    let x;
    if(data.atomicNumber == 1){
        x = "red"
    }
    else{
        x = "green"
    }
    if (data.name == undefined){
        return <HiddenTile/>
    } else{
        return <Tile 
        symbol = {data.symbol}
        number = {data.atomicNumber}
        name = {data.name}
        test = {x}
        />
    } 
}




export default TableHolder;