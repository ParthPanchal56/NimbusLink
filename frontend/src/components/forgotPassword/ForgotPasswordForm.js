import { React, useState, useEffect } from 'react'
import Input from './Input'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function ForgotPasswordForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const forgotPasswordInfo = {
        username: ''
    }

    const [forgotPassword, setForgotPassword] = useState(forgotPasswordInfo)
    const { username } = forgotPassword

    const handleForgotPasswordChange = (e) => {
        const { name, value } = e.target
        setForgotPassword({
            ...forgotPassword,
            [name]: value
        })
    }

    const forgotPasswordValidation = Yup.object({
        username: Yup.string().required('Username is required').max(20, 'Username must be less than 20 characters')
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')


    const handleForgotPasswordSubmit = async () => {
        setLoading(true)
        try {
            const { data } = await axios.post('http://localhost:5000/forgotPassword', {
                username
            })
            setLoading(false)
            setError('')
            setSuccess(data.message)
        }
        catch (error) {
            setLoading(false)
            setSuccess('')
            setError(error.response.data.message)
        }
    }

    // As soon as the form is success then redirect to reset password page

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                navigate('/resetPassword')
            }, 2000)
        }
    }, [success, navigate, dispatch])



    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{
                    username
                }}
                validationSchema={forgotPasswordValidation}
                onSubmit={() => {
                    setError('')
                    handleForgotPasswordSubmit()
                }}
            >
                {
                    (formik) => (
                        <Form>

                            <Input label="Username" type="text" name="username" placeholder="Enter your username" onChange={handleForgotPasswordChange} />


                            {/* if loading then show button 1 else show button 2 */}



                            <div className="form-group mb-0 text-center">
                                {loading ? (
                                    <button className="btn btn-primary" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                ) : (
                                    <button type="submit" className="btn btn-primary">
                                        <i className="mdi mdi-email-send" /> Send OTP
                                    </button>
                                )}
                            </div>


                            {/* Show response after submit */}
                            {success && <div className="alert alert-success" role="alert" style={{ marginTop: '10px' }}>
                                {success}
                            </div>}
                            {error && <div className="alert alert-danger" role="alert" style={{ marginTop: '10px' }}>
                                {error}
                            </div>}

                        </Form>
                    )
                }
            </Formik>
        </>
    )
}
