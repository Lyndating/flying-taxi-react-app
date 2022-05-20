import React, {useState, useTransition} from 'react';
import "./Home.css";
import{Link} from 'react-router-dom';
import Signup from './Signup';
import RedirectingPage from './RedirectingPage';
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
    const [formshow, SetFormShow] = useState(false);
    const [emailInput, setEmailInput] = useState('');
    const [completeForm, setCompleteForm] = useState(false);
    const _sumbithandler = (e)=>{
        e.preventDefault();
        setResult(true);
        setPrice(getRandomIntInclusive(20,60));

    };
    const _closePopUp = ()=>{
        setResult(false);
    }
    let pricingStyleClassName = "";
    if (result){
        pricingStyleClassName="pop-up-price-show ";
    }else{
        pricingStyleClassName="pop-up-price-hide";
    }

    const _SignupHandler = ()=>{
        SetFormShow(true);
    } 
    const closeSignupForm =()=>{
        SetFormShow(false);
    }
    let signupStyleClassName ="";
    if (formshow) {
        signupStyleClassName="pop-up-signup-show bg-gray-5";
    }else{
        signupStyleClassName="pop-up-signup-hide";
    }
    const saveUserHandler = (data)=> {
        SetFormShow(false);
        setCompleteForm(true);
    }
    return (
        <>
        <div className='Home-page'>
            <div className='Home-left'>
                <h1>Your all-in-one taxi services</h1>
                <p> Time to ride in comfort </p>
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
            <div className={pricingStyleClassName}>
                <p>From : {startLocation}</p>
                <p>To: {destination}</p>
                <p>Price: $ {price}</p>
                <button onClick={_closePopUp}>Close</button>
            </div>}
        <div className='Signup-form'>
            <p>Get all the latest updates straight to your inbox!</p>
            <h1>Sign up to our newsletter</h1>
            <div className='Signup-tag'>
            <input type='email' placeholder="Your email"onChange={emailInput}/>
            <button onClick={_SignupHandler}>Sign up</button>
            </div>
        </div>
        {formshow &&
            <div className={signupStyleClassName}>
                <Signup show={formshow} onClick={closeSignupForm} onSubmit={saveUserHandler}/>
            </div>
        }
        {completeForm &&
            <div className={signupStyleClassName}>
                <RedirectingPage />
            </div>
        }
        </>
    )
}

export default Home;