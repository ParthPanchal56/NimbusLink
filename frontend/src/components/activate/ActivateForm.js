import React from 'react'
import Input from './Input'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import axios from 'axios'

export default function ActivateForm() {

    const activateInfo = {
        username: '',
        otp: ''
    }

    const [activate, setActivate] = useState(activateInfo)
    const { username, otp } = activate

    const handleOtpChange = (e) => {
        const { name, value } = e.target
        setActivate({
            ...activate,
            [name]: value
        })
    }

    const activateValidation = Yup.object({
        username: Yup.string().required('Username is required').max(20, 'Username must be less than 20 characters'),
        otp: Yup.string().required('OTP is required').min(6, 'OTP too short').max(6, 'OTP must be 6 digits')
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')



    const handleOTPSubmit = async () => {
        setLoading(true)
        try {
            const { data } = await axios.post('http://localhost:5000/activate', {
                username,
                otp
            })
            setLoading(false)
            setError('')
            setSuccess(data.message)

        } catch (error) {
            setLoading(false)
            setSuccess('')
            setError(error.response.data.message)
        }
    }

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{
                    username,
                    otp
                }}
                validationSchema={activateValidation}
                onSubmit={() => {
                    setError('')
                    handleOTPSubmit()
                }}
            >
                {
                    (formik) => (
                        <Form>

                            <Input label="Username" type="text" name="username" placeholder="Enter your username" onChange={handleOtpChange} />
                            <Input label="OTP" type="number" name="otp" placeholder="Enter your OTP" onChange={handleOtpChange} />


                            {/* if loading then show button 1 else show button 2 */}

                            <div className="form-group mb-0 text-center">
                                {loading ? (
                                    <button className="btn btn-primary" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                ) : (<button className="btn btn-primary btn-block" type="submit">
                                    <i className="mdi mdi-account-circle" /> Activate Account
                                </button>)}
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