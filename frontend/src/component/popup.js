import React from "react";
import Popup from 'reactjs-popup';

const pop = () => (
    <Popup trigger=
    { <img className="buttonStyle"  src={`../img/user.png`} alt="star logo" />}
  >
    {
        close => (
            <div className='modal'>
                <div className='content' onClick={()=>close()}>
                   My Recipes
                </div>
                <div className='content' onClick={()=>close()}>
                   logout
                </div>
                <div>
                    <button className="Close" onClick=
                        {() => close()}>
                            x
                    </button>
                </div>
            </div>
        )
    }
</Popup>
);

export default pop;