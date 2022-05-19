// import React from 'react'
// import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
// import * as Yup from 'yup';
// import Label from './Label';

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
// }


const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
  .min(3, 'short')
  .max(20, 'too long')
  .required('Required'),
  lastName: Yup.string().min(3, "too short"),
  email: Yup.string().email("2,invalid email").required("Required")
})

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//   .min(3, 'short')
//   .max(20, 'too long')
//   .required('Required'),
//   lastName: Yup.string().min(3, "too short"),
//   email: Yup.string().email("invalid email").required("Required")
// })


// const SignUpForm = () => {
//   const submitForm =(values: FormValues) => {
//     console.log(values);
  
//   };

 
//   return (
//    <Formik
//    initialValues={{firstName:'', lastName:'', email:''}}
//    validationSchema={SignupSchema}
//    onSubmit={submitForm}
// >

//   {}

//      <Form className="w-64 bg-gray-50 p-4 flex flex-col shadow-sm">

// <h2 className="text-center text-2x1 font-bold">sign up for newsletter!</h2>
// <div className="my-2 flex flex-col">
// <Label htmlFor="firstName" text="First name" required={true} />
// <Field id="firstName" name="firstName" className="p-2 border-2 border-gray-400" />
// <ErrorMessage className="text-red-700" component="div" name="firstName" />
// </div>
// <div className="my-2 flex flex-col">
// <Label htmlFor="lastName" text="Last name"  />
// <Field name="lastName" className="p-2 border-2 border-gray-400" />

// </div>
// <div className="my-2 flex flex-col">
// <Label htmlFor="email" text="Email" required={true} />
// <Field name="email" className="p-2 border-2 border-gray-400" />
// <ErrorMessage className="text-red-700" component="div" name="Email" />
// </div>
 
//  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-not-allowed">submit</button>


//  </Form>

 
//    </Formik>
//   )
// }

// export default SignUpForm