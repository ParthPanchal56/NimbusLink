import { React, useState, useEffect } from 'react'
import Input from './Input'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


export default function ResendEmailForm() {

    const resendEmailInfo = {
        username: ''
    }

    const [resendEmail, setResendEmail] = useState(resendEmailInfo)
    const { username } = resendEmail

    const handleResendEmailChange = (e) => {
        const { name, value } = e.target
        setResendEmail({
            ...resendEmail,
            [name]: value
        })
    }

    const resendEmailValidation = Yup.object({
        username: Yup.string().required('Username is required').max(20, 'Username must be less than 20 characters')
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [disableSubmit, setDisableSubmit] = useState(false);
    const [timer, setTimer] = useState(0);


    const handleResendEmailSubmit = async () => {

        setLoading(true)

        try {
            const { data } = await axios.post('http://localhost:5000/resendActivation', {
                username
            })

            setLoading(false)
            setError('')
            setSuccess(data.message)
            setDisableSubmit(true);
            setTimer(900);


        } catch (error) {

            setLoading(false)
            setSuccess('')
            setError(error.response.data.message)

        }

    }

    useEffect(() => {
        let intervalId = null;
        if (disableSubmit) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [disableSubmit]);

    useEffect(() => {
        if (timer <= 0) {
            setDisableSubmit(false);
        }
    }, [timer]);

    const formatTime = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{
                    username
                }}
                validationSchema={resendEmailValidation}
                onSubmit={() => {
                    setError('')
                    handleResendEmailSubmit()
                }}
            >
                {
                    (formik) => (
                        <Form>

                            <Input label="Username" type="text" name="username" placeholder="Enter your username" onChange={handleResendEmailChange} />


                            {/* if loading then show button 1 else show button 2 */}



                            <div className="form-group mb-0 text-center">
                                {loading ? (
                                    <button className="btn btn-primary" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                ) : (
                                    <button type="submit" className="btn btn-primary" disabled={disableSubmit}>
                                        <i className="mdi mdi-email-send" /> {disableSubmit ? formatTime() : 'Resend Email'}
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
