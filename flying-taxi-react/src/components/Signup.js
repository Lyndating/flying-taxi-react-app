import React, { useState } from "react";

const Signup = (props) => {
    console.log(props);
    const [user, setUser] = useState({});
    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        email: ''
    });
    const [formedit, setFormEdit] = useState(true);
    const [signupErrors, setSignupErrors] = useState([]);
    const [completeForm, setCompleteForm] = useState(false);
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

    const handleChange = (event) => {
        setState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }
    const _closeHandler = () => {
        setFormEdit(false);
    }

    console.log( props.show);
    const handleSubmit = (event) => {
        event.preventDefault();
        // fetch(`https://flying-taxi-service-server.herokuapp.com/users`, {
            fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                first_name: state.first_name,
                last_name: state.last_name,
                email: state.email
              }
            })
          })
          .then(response => response.json())
          .then(jsonResponse => {
              console.log(jsonResponse)
            if (jsonResponse) {
              setSignupErrors(jsonResponse);
            }
          });
          setCompleteForm(true);
    }
    

    return (
        <div>
            <div className="bg-gray-5 w-64 Sign-up-header">
            <h1>Sign Up</h1>
            <button onClick={props.onClick}style={{float:"right"}}>X</button>
            </div>
            <div className="form-body my-2 flex flex-col">
                <form onSubmit={handleSubmit}
                className="w-64 bg-gray-50 p-4 flex flex-col shadow-sm">
                    <label>
                        First name
                        <input name='first_name' value={state.first_name} onChange={handleChange}
                        className="p-2 border-2 border-gray-400" />
                        {signupErrors.first_name ? 
                            <ul className = "form-errors"> {signupErrors.first_name.map((error) => (
                                <li key={error.id}>{error}</li>
                                ))}
                            </ul> 
                        : null}
                    </label>

                    <label>
                        Last name
                        <input name='last_name' value={state.last_name} onChange={handleChange}
                        className="p-2 border-2 border-gray-400" />
                        {signupErrors.last_name ? 
                            <ul className = "form-errors"> {signupErrors.last_name.map((error) => (
                                <li key={error.id}>{error}</li>
                                ))}
                            </ul> 
                        : null}
                    </label>

                    <label>
                        Email
                        <input name='email' value={state.email} onChange={handleChange}
                        className="p-2 border-2 border-gray-400" />
                        {signupErrors.email ? 
                            <ul className = "form-errors"> {signupErrors.email.map((error) => (
                                <li key={error.id}>{error}</li>
                                ))}
                            </ul> 
                        : null}
                    </label>
                    <br></br>    
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>



                </form>
            </div>          
        </div>
    );

};

export default Signup;