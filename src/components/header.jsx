import React from 'react';
import ReactDom from 'react-dom';
import picAtom from '../Images/atomAnim.gif';
import rickRoll from '../Images/rick.gif';
function Header(){
    return <header className='navbar'>
        {/* <div className='inner'> */}
            <img className="logo" src={picAtom}/>
        {/* </div> */}
            <img className='rickRoll' src={rickRoll}/>
    </header>
}

export default Header;