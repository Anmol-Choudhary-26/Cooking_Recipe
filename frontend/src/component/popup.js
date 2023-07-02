import React from "react";
import Popup from 'reactjs-popup';

const pop = () => (

    
    <Popup trigger=
    { <img className="buttonStyle"  src={`../img/user.png`} alt="star logo" />}
  >
    {
    
        close => (
            <div className='modal'>
                <button className='Close' onClick={async () => {
                            await fetch("https://backend.study-ezy.tech/auth/logout/", { method: "POST" }).then((res) => res.json()).then((data) => {
                                sessionStorage.clear()
                                localStorage.clear()
                                console.log(data)
                                setTimeout(() => {
                                    window.location.replace("login")
                                }, 1000);
                            })
                        }}>
                    logout
                </button>
                <div>
                    <button className="Close" onClick=
                        {()=>close()}>
                            Close
                    </button>
                </div>
            </div>
        )
    }
</Popup>
);

export default pop;