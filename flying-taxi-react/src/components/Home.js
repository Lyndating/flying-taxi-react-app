import React, {useState, useTransition} from 'react';
import "./Home.css";
import{Link} from 'react-router-dom';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
    //The maximum is inclusive and the minimum is inclusive 
};
const Home = () => {
    const [startLocation, setStartLocation] = useState("");
    const [destination, setDestination] = useState('');
    const [result, setResult] = useState(false);
    const [price, setPrice]= useState(0);
    const _sumbithandler = (e)=>{
        e.preventDefault();
        setResult(true);
        setPrice(getRandomIntInclusive(20,60));

    };
    const _closePopUp = ()=>{
        setResult(false);
    }
    let cssStyleClassName = "";
    if (result){
        cssStyleClassName="pop-up-price-show";
    }else{
        cssStyleClassName="pop-up-price-hide";
    }

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
            <h2>Check the pricing</h2>
            <form onSubmit={_sumbithandler}>
                <div className='check-start'>
                <i className='fa-solid fa-location-dot'></i>
                <label> Start: 
                <br></br>
                <br></br>
                <input type="text" value={startLocation} onChange={(e)=> setStartLocation(e.target.value)}required/>         
                </label>
                <br></br>
                <br></br>
                </div>
                <div className='check-destination'>
                <i className='fa-solid fa-location-dot'></i>
                <label> Destination:
                    <br></br>
                    <br></br>
                <input type="text" value={destination} onChange={(e)=> setDestination(e.target.value)} required/>
                </label>
                <br></br>
                <br></br>
                </div>
                <button>Check</button>
            </form>
        </div>
        {result && 
            <div className={cssStyleClassName}>
                <p>From : {startLocation}</p>
                <p>To: {destination}</p>
                <p>Price: $ {price}</p>
                <button onClick={_closePopUp}>Close</button>
            </div>}
        </>
    )
}

export default Home;