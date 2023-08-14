import { React, useState } from 'react'
import Input from './Input'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


export default function ResetPasswordForm() {

    const resetPasswordInfo = {
        otp: '',
        newPassword: '',
    }

    const [resetPassword, setResetPassword] = useState(resetPasswordInfo)
    const { otp, newPassword } = resetPassword

    const handleResetPasswordChange = (e) => {
        const { name, value } = e.target
        setResetPassword({
            ...resetPassword,
            [name]: value
        })
    }

    const resetPasswordValidation = Yup.object({
        otp: Yup.string().required('OTP is required').max(6, 'OTP must not be more than 6 characters').min(6, 'OTP must be 6 characters'),
        newPassword: Yup.string().required('Password is required').min(8, 'Password must be 8 characters').max(20, 'Password must not be more than 20 characters')
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')


    const handleResetPasswordSubmit = async () => {
        setLoading(true)
        try {
            const { data } = await axios.post('http://localhost:5000/resetPassword', {
                otp,
                newPassword
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


    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{
                    otp,
                    newPassword
                }}
                validationSchema={resetPasswordValidation}
                onSubmit={() => {
                    setError('')
                    handleResetPasswordSubmit()
                }}
            >
                {
                    (formik) => (
                        <Form>

                            <Input label="OTP" type="text" name="otp" placeholder="Enter your OTP" onChange={handleResetPasswordChange} />
                            <Input label="New Password" type="password" name="newPassword" placeholder="Enter your New Password" onChange={handleResetPasswordChange} />


                            {/* if loading then show button 1 else show button 2 */}



                            <div className="form-group mb-0 text-center">
                                {loading ? (
                                    <button className="btn btn-primary" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                ) : (
                                    <button type="submit" className="btn btn-primary">
                                        <i className="mdi mdi-email-send" /> Change Password
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
