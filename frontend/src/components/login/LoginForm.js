import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from './Input'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import axios from 'axios'


function LoginForm() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Initial values for login form

    const loginInfo = {
        username: '',
        password: ''
    }
    const [login, setLogin] = useState(loginInfo)

    // Destructuring login object
    const { username, password } = login

    // Handle login form change
    const handleLoginChange = (e) => {
        const { name, value } = e.target
        setLogin({
            ...login,
            [name]: value
        })
    }

    // Login form validation

    const loginValidation = Yup.object({
        username: Yup.string().required('Username is required').max(20, 'Username must be less than 20 characters'),
        password: Yup.string().required('Password is required').min(6, 'Password too short')
    })


    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    // Handle login form submit

    const handleLoginSubmit = async () => {
        setLoading(true)
        try {
            const { data } = await axios.post('http://localhost:5000/login', {
                username,
                password
            })
            setError('')
            setTimeout(() => {
                dispatch({ type: 'LOGIN', payload: data });
                Cookies.set('user', JSON.stringify(data));
                console.log({ data });
                navigate('/');
            }, 1000);
        }
        catch (error) {
            setError(error.response.data.message)
            setLoading(false)
        }
    }

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{
                    username,
                    password
                }}
                validationSchema={loginValidation}
                onSubmit={() => {
                    setError('')
                    handleLoginSubmit()
                }}
            >
                {
                    (formik) => (
                        <Form>

                            <Input label="Username" type="text" name="username" placeholder="Enter your username" onChange={handleLoginChange} />
                            <Input label="Password" type="password" name="password" placeholder="Enter your Password" onChange={handleLoginChange} />


                            {/* if loading then show button 1 else show button 2 */}

                            <div className="form-group mb-0 text-center">
                                {loading ? (
                                    <button className="btn btn-primary" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                ) : (<button className="btn btn-primary btn-block" type="submit">
                                    <i className="mdi mdi-account-circle" /> Login
                                </button>)}
                            </div>

                            {/* Show response after submit */}
                            {error && <div className="alert alert-danger" role="alert" style={{ marginTop: '10px' }}>
                                {error}
                            </div>}
                        </Form>
                    )
                }
            </Formik>

            <p className="text-muted text-center mt-3">
                <Link to="/forgotPassword" className="text-muted ml-1">
                    <b>Forgot Password?</b>
                </Link>
            </p>
        </>

    )
}

export default LoginForm