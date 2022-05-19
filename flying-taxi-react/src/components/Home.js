import React, {useState, useTransition} from 'react';
import "./Home.css";
import{Link} from 'react-router-dom';

const Home = () => {
    const [startLocation, setStartLocation] = useState("");
    const [destination, setDestination] = useState('');
    const [result, setResult] = useState(false);
    const _sumbithandler = ()=>{
        setResult = true;
    };


    return (
        <>
        <div className='Home-page'>
            <div className='Home-left'>
                <h1>Your all-in-one taxi services</h1>
                <p>You can monitor and manage </p>
                <Link to="/service">
                    <button>Click & book now</button>
                </Link>
            </div>
            <div className='Home-right'>
                <img src='taxi.png' alt='flying-taxi'/>
            </div>
        </div>
        <div className='Service-page'>
            <h3>Check the pricing</h3>
            <form onSubmit={_sumbithandler}>
                <i className='fa-solid fa-location-dot'></i>
                <label>Start: 
                <input type="text" value={startLocation} onChange={(e)=> setStartLocation(e.target.value)}required/>         
                </label>
                <span>You are here</span>
                <label>End: 
                <input type="text" value={destination} onChange={(e)=> setDestination(e.target.value)} required/>
                </label>
                <button>Check</button>
            </form>
        </div>
        {result && 
            <div className='pop-up-price'>
                <p>From : {startLocation}</p>
                <p>To: {destination}</p>
                <p>Price: $ {26.58}</p>
                <button>Close</button>
            </div>}
        </>
    )
}

export default Home;