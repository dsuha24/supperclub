import React, { useState, useContext } from 'react';

import DefaultCard from '../../shared/components/UIElements/DefaultCard';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './Auth.css';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler = async event => {
    event.preventDefault();

    // console.log("email", formState.inputs.email.value);
    // console.log("password", formState.inputs.password.value);

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users/login',
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          }),
          {
            'Content-Type': 'application/json',
          }
        );
        auth.login(responseData.userId, responseData.token);

        console.log("logged in");
        // console.log(responseData.user.id);
      } catch (err) {
        console.log("error logging in")
      }
    } else {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users/signup',
          'POST',
          JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          }),
          {
            'Content-Type': 'application/json',
          }
        );

        auth.login(responseData.userId, responseData.token);
        console.log("signed up");
      } catch (err) {}
      console.log("error signing up");
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <DefaultCard className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Login Required</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
            />
          )}
          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid password, at least 5 characters."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? 'LOGIN' : 'SIGNUP'}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
        </Button>
      </DefaultCard>
    </React.Fragment>
  );
};

export default Auth;












// import React, {useState} from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import './Auth.css';
// import { Button, Input } from "@material-ui/core";
// import LoadingSpinner from "./UIElements/LoadingSpinner";
// import ErrorModal from "./UIElements/ErrorModal";
// import { useHttpClient } from '../../shared/hooks/http-hook';

// const Auth = () => {  

//   const [isLoginMode, setIsLoginMode] = useState(true);
//   // const [isLoading, setIsLoading] = useState(false);
//   // const [error, setError] = useState();
//   const { isLoading, error, sendRequest, clearError } = useHttpClient();

//   const switchModeHandler = () => {
//     setIsLoginMode(prevMode => !prevMode);
//   };

//   // const errorHandler = () => {
//   //   setError(null);
//   // };

//   return (
//     <Formik
//       initialValues={{ email: "", username: "", password: "" }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(async () => {
//           // console.log("Signup", values);
//           // console.log("username", values.username);
//           // console.log("email", values.email);
//           // console.log("password", values.password);
//           // setIsLoading(true);

//           // if (isLoginMode) {
//           //   try {
//           //     const response = await fetch('http://localhost:5000/api/users/login', {
//           //       method: 'POST',
//           //       headers: {
//           //         'Content-Type': 'application/json'
//           //       },
//           //       body: JSON.stringify({
//           //         email: values.email,
//           //         password: values.password
//           //       })
//           //     });
      
//           //     const responseData = await response.json();
//           //     if (!response.ok) {
//           //       throw new Error(responseData.message);
//           //     }
//           //     setIsLoading(false);
//           //   } catch (err) {
//           //     setIsLoading(false);
//           //     setError(err.message || 'Something went wrong, please try again.');
//           //   }
//           // } else {
//           //   try {
//           //     const response = await fetch('http://localhost:5000/api/users/signup', {
//           //       method: 'POST',
//           //       headers: {
//           //         'Content-Type': 'application/json'
//           //       },
//           //       body: JSON.stringify({
//                   // name: values.username,
//                   // email: values.email,
//                   // password: values.password
//           //       })
//           //     });
      
//           //     const responseData = await response.json();
//           //     if (!response.ok) {
//           //       throw new Error(responseData.message);
//           //     }
//           //     setIsLoading(false);
//           //   } catch (err) {
//           //     setIsLoading(false);
//           //     setError(err.message || 'Something went wrong, please try again.');
//           //   }
//           // }


//           //send values to db            
          
//           if (isLoginMode) {
//             try {
//               await sendRequest(
//                 'http://localhost:5000/api/users/login',
//                 'POST',
//                 JSON.stringify({
//                   email: values.email,
//                   password: values.password
//                 }),
//                 {
//                   'Content-Type': 'application/json'
//                 }
//               );
//               console.log("Logged in");
//             } catch (err) {}
//           } else {
//             try {
//               await sendRequest(
//                 'http://localhost:5000/api/users/signup',
//                 'POST',
//                 JSON.stringify({
//                   name: values.username,
//                   email: values.email,
//                   password: values.password
//                 }),
//                 {
//                   'Content-Type': 'application/json'
//                 }
//               );
//             } catch (err) {}
//           }

//           setSubmitting(false);
//         }, 500);
//       }}

//       validationSchema={Yup.object().shape({
//         email: Yup.string()
//           .email()
//           .required("Required"),
//         username: Yup.string()
//           .required("Required"),
//         password: Yup.string()
//           .required("No password provided.")
//           .min(8, "Password is too short - should be 8 chars minimum.")
//           .matches(/(?=.*[0-9])/, "Password must contain a number.")
//       })}
//     >
//       {props => {
//         const {
//           values,
//           touched,
//           errors,
//           isSubmitting,
//           handleChange,
//           handleBlur,
//           handleSubmit
//         } = props;
//         return (
//           <React.Fragment>
//             <ErrorModal error={error} onClear={clearError} />
//             {isLoading && <LoadingSpinner asOverlay />}
//             <form onSubmit={handleSubmit}>
//             {!isLoginMode && <label htmlFor="email">Email</label>}
//             {!isLoginMode && (
//               <input
//               name="email"
//               type="text"
//               placeholder="Enter your email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={errors.email && touched.email && "error"}
//             />
//             )}
//             <label htmlFor="username">Username</label>
//             <input
//               name="username"
//               type="text"
//               placeholder="Enter your username"
//               value={values.username}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={errors.username && touched.username && "error"}
//             />
//             {errors.email && touched.email && (
//               <div className="input-feedback">{errors.email}</div>
//             )}
//             <label htmlFor="email">Password</label>
//             <input
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={errors.password && touched.password && "error"}
//             />
//             {errors.password && touched.password && (
//               <div className="input-feedback">{errors.password}</div>
//             )}
//             <button className="login-button" type="submit" disabled={isSubmitting}>
//               {isLoginMode ? 'LOGIN' : 'SIGNUP'}
//             </button>
//             <Button inverse onClick={switchModeHandler}>SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}</Button>
//           </form>
//           </React.Fragment>
//         );
//       }}
//     </Formik>
//   );
// }

// export default Auth;
