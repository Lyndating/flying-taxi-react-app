// import React from 'react'
// import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
// // import * as Yup from 'yup';
// import Label from './Label';

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
// }


// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//   .min(3, 'short')
//   .max(20, 'too long')
//   .required('Required'),
//   lastName: Yup.string().min(3, "too short"),
//   email: Yup.string().email("2,invalid email").required("Required")
// })

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
//   //  validationSchema={SignupSchema}
//    onSubmit={submitForm}
// >




