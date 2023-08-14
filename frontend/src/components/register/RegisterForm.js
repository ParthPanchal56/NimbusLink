import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import RadioInput from './Radio-Input';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Initial values for register form
    const userInfo = {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        gender: '',
        birth_date: '',
    };

    const [user, setUser] = useState(userInfo);

    // Destructuring register object
    const { first_name, last_name, username, email, birth_date, password, gender } = user;

    // Handle register form change
    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    // Regex for name validation
    const nameRegex = /^[A-Za-z- ]+$/;
    const usernameRegex = /^[A-Za-z0-9]+$/;

    // Date of birth validation (14+)
    const dobValidation = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 14) {
            return false;
        }
        return true;
    };

    // Register form validation
    const registerValidation = Yup.object({
        first_name: Yup.string().required('First name is required').min(2, 'First name too short').max(20, 'First name must be less than 20 characters').matches(nameRegex, 'First name must be alphabets only'),
        last_name: Yup.string().required('Last name is required').min(2, 'Last name too short').max(20, 'Last name must be less than 20 characters').matches(nameRegex, 'Last name must be alphabets only'),
        username: Yup.string().required('Username is required').min(2, 'Username too short').max(20, 'Username must be less than 20 characters').matches(usernameRegex, 'Username must be alphabets and numbers only'),
        email: Yup.string().required('Email is required').email('Enter a valid email address'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters').max(36, 'Password must be less than 36 characters'),
        gender: Yup.string().required('Gender is required'),
        birth_date: Yup.string().required('Date of birth is required').test('age', 'You must be 14 years or older', (birth_date) => dobValidation(birth_date)),
    });

    // Register form submit
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Register form submit

    const handleRegisterSubmit = async () => {
        try {
            setLoading(true);
            const { data } = await axios.post('http://localhost:5000/register', {
                first_name,
                last_name,
                username,
                email,
                password,
                birth_date,
                gender
            });
            setLoading(false);
            setError('');
            setSuccess(data.message);

            // Set user info in redux store
            const { message, ...rest } = data;

            setTimeout(() => {
                dispatch({ type: 'LOGIN', payload: rest });
                Cookies.set('user', JSON.stringify(rest));
                navigate('/login');
            }, 2000);

        } catch (error) {
            setLoading(false);
            setSuccess('');
            setError(error.response.data.message);
            console.log(error.response.data.message);
        }
    };

    return (

        <Formik
            enableReinitialize
            initialValues={{
                first_name,
                last_name,
                username,
                email,
                password,
                birth_date,
                gender
            }}
            validationSchema={registerValidation}
            onSubmit={() => {
                setError('')
                handleRegisterSubmit()
            }}
        >
            {(formik) => (


                <Form>
                    <Input label="First Name" type="text" name="first_name" placeholder="Enter your first name" onChange={handleRegisterChange} />
                    <Input label="Last Name" type="text" name="last_name" placeholder="Enter your last name" onChange={handleRegisterChange} />
                    <Input label="Username" type="text" name="username" placeholder="Enter your username" onChange={handleRegisterChange} />
                    <Input label="Email" type="email" name="email" placeholder="Enter your email" onChange={handleRegisterChange} />
                    <Input label="Password" type="password" name="password" placeholder="Enter your password" onChange={handleRegisterChange} />
                    <Input label="Date of Birth" type="date" name="birth_date" placeholder="Enter your date of birth" onChange={handleRegisterChange} />

                    <label>Gender</label>
                    <div className="form-group">
                        <RadioInput type="radio" label="Male" value="Male" name="gender" onChange={handleRegisterChange} />
                        <RadioInput type="radio" label="Female" value="Female" name="gender" onChange={handleRegisterChange} />
                        <RadioInput type="radio" label="Other" value="Other" name="gender" onChange={handleRegisterChange} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox-signup"
                            />
                            <label className="custom-control-label" htmlFor="checkbox-signup">
                                I accept{" "}
                                <Link to="#" className="text-muted">
                                    Terms and Conditions
                                </Link>
                            </label>
                        </div>
                    </div>


                    {/* if loading then show button 1 else show button 2 */}

                    <div className="form-group mb-0 text-center">
                        {loading ? (
                            <button className="btn btn-primary" type="button" disabled>
                                <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>
                        ) : (<button className="btn btn-primary btn-block" type="submit">
                            <i className="mdi mdi-account-circle" /> Register
                        </button>)}
                    </div>

                    {/* Show response after submit */}
                    {error && <div className="alert alert-danger" role="alert" style={{ marginTop: '10px' }}>
                        {error}
                    </div>}
                    {success && <div className="alert alert-success" role="alert" style={{ marginTop: '10px' }}>
                        {success}
                    </div>}

                </Form>

            )}

        </Formik>

    );
};

export default RegisterForm;
