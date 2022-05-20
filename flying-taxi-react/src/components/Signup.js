import React, { useState } from "react";


const Signup = (props) => {
    const [user, setUser] = useState({});
    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        email: props.email,
    });
    const [checkbox,setCheckbox] = useState({
        newsletter_a: null,
        newsletter_b: null,
        newsletter_c: null,
        newsletter_d: null,
        sub_daily: null,
        sub_weekly: null,
        sub_monthly: null,
    });


    // const signUp = (user) => {
    //     fetch(`https://flying-taxi-service-server.herokuapp.com/users`, {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         user: {
    //           first_name: user.first_name,
    //           last_name: user.last_name,
    //           email: user.email
    //         }
    //       })
    //     })
    //     .then(response => response.json())
    //     .then(jsonResponse => {
    //       if (jsonResponse.errors) {
    //         setSignupErrors(jsonResponse.errors);
    //       }
    //     });
    //   };
    const [signupErrors, setSignupErrors] = useState([]);

    const handleChange = (event) => {
        setState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleCheck = (event) => {
        setCheckbox((prev) => ({ ...prev, [event.target.name]: event.target.checked }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
            fetch(`https://flying-taxi-service-server.herokuapp.com/users`, {
            // fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                first_name: state.first_name,
                last_name: state.last_name,
                email: state.email,
                newsletter_a: checkbox.newsletter_a,
                newsletter_b: checkbox.newsletter_b,
                newsletter_c: checkbox.newsletter_c,
                newsletter_d: checkbox.newsletter_d,
                sub_daily: checkbox.sub_daily,
                sub_weekly: checkbox.sub_weekly,
                sub_monthly: checkbox.sub_monthly
              }
            })
          })
          .then(response => response.json())
          .then(jsonResponse => {
              console.log(jsonResponse,'hey')
            if (jsonResponse.errors) {
                console.log(jsonResponse.errors)
                console.log(jsonResponse.errors.email)
                console.log(jsonResponse.errors.first_name)
                console.log(jsonResponse.errors.last_name)
              setSignupErrors(jsonResponse.errors);
            } 
            // else {
            //     navigate("/", { replace: true });
            // }
          });

          console.log(signupErrors)
    }
    

    return (
        <div>
            <div className="bg-gray-5 w-64 Sign-up-header">
            <h1>Sign Up</h1>
            <button onClick={props.onClick} style={{float:"right"}}>X</button>
            </div>
            <div className="form-body my-2 flex flex-col">
                <form onSubmit={handleSubmit}
                className="w-64 bg-gray-50 p-4 flex flex-col shadow-sm">
                    <label>
                        First name
                        <input name='first_name' value={state.first_name} onChange={handleChange}
                        className="p-2 border-2 border-gray-400" required/>
                        {signupErrors.first_name !== undefined ? 
                            <ul className = "form-errors text-red-400 text-sm"> {signupErrors.first_name.map((error) => (
                                <li key={Math.random()}>{error}</li>
                                ))}
                            </ul> 
                        : null}
                    </label>

                    <label>
                        Last name
                        <input name='last_name' value={state.last_name} onChange={handleChange}
                        className="p-2 border-2 border-gray-400" required/>
                        {signupErrors.last_name !== undefined ? 
                            <ul className = "form-errors text-red-400 text-sm"> {signupErrors.last_name.map((error) => (
                                <li key={Math.random()}>{error}</li>
                                ))}
                            </ul> 
                        : null}
                    </label>

                    <label>
                        Email
                        <input name='email' value={state.email} onChange={handleChange}
                        className="p-2 border-2 border-gray-400" required/>
                        {signupErrors.email !== undefined ? 
                            <ul className = "form-errors text-red-400 text-sm"> {signupErrors.email.map((error) => (
                                <li key={Math.random()}>{error}</li>
                                ))}
                            </ul>
                        : null}
                    </label>
                    
                    <h1 class="font-bold text-xl text-center m-4"> Choose topics:</h1>

                    <div class="text-center ">
                        <div class="accent-yellow-300">
                            <label class="inline-flex items-center">
                            <input type="checkbox" name='newsletter_a' value={checkbox.newsletter_a} onChange={handleCheck} 
                            class="w-14 h-14"/>
                                <span class="ml-2">Newsletter A</span>
                            </label>
                        </div>
                    </div>

                    <div class="text-center ">
                        <div class="accent-yellow-300">
                            <label class="inline-flex items-center">
                            <input type="checkbox" name='newsletter_b' value={checkbox.newsletter_b} onChange={handleCheck} 
                            class="w-14 h-14"/>
                                <span class="ml-2">Newsletter B</span>
                            </label>
                        </div>
                    </div>

                    <div class="text-center ">
                        <div class="accent-yellow-300">
                            <label class="inline-flex items-center">
                            <input type="checkbox" name='newsletter_c' value={checkbox.newsletter_c} onChange={handleCheck} 
                            class="w-14 h-14"/>
                                <span class="ml-2">Newsletter C</span>
                            </label>
                        </div>
                    </div>

                    <div class="text-center ">
                        <div class="accent-yellow-300">
                            <label class="inline-flex items-center">
                            <input type="checkbox" name='newsletter_d' value={checkbox.newsletter_d} onChange={handleCheck} 
                            class="w-14 h-14"/>
                                <span class="ml-2">Newsletter D</span>
                            </label>
                        </div>
                    </div>

                    <h1 class="font-bold text-xl text-center m-2"> Delivery frequency:</h1> 
                    
                    <div class="block accent-yellow-300">
                        <div class="mt-0 px-8">
                            <label class="inline-flex items-center">
                                <input type="checkbox" name='sub_daily' value={checkbox.sub_daily} onChange={handleCheck}
                                class="w-4 h-4" />
                                <span class="ml-2 ">Daily</span>
                            </label>
                        </div>
                    </div>

                    <div class="block accent-yellow-300">
                        <div class="mt-0 px-8">
                            <label class="inline-flex items-center">
                                <input type="checkbox" name='sub_weekly' value={checkbox.sub_weekly} onChange={handleCheck}
                                class="w-4 h-4" />
                                <span class="ml-2 ">Weekly</span>
                            </label>
                        </div>
                    </div>

                    <div class="block accent-yellow-300">
                        <div class="mt-0 px-8">
                            <label class="inline-flex items-center">
                                <input type="checkbox" name='sub_monthly' value={checkbox.sub_monthly} onChange={handleCheck}
                                class="w-4 h-4" />
                                <span class="ml-2 ">Weekly</span>
                            </label>
                        </div>
                    </div>


                    <button className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded">Sign Up</button>


                </form>
            </div>          
        </div>
    );

};

export default Signup;