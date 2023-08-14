import { Fragment, React, useEffect, useState } from 'react';


export default function DisableSubmitButton() {

    const [disabled, setDisabled] = useState(false);
    const [timer, setTimer] = useState(0);

    const handleClick = () => {

        setDisabled(true);
        setTimer(900); // 900 seconds = 15 minutes
    };

    useEffect(() => {
        let intervalId = null;

        if (timer > 0) {
            intervalId = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        } else {
            setDisabled(false);
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [timer]);

    const formatTime = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };


    return (
        <>
            <button type="submit" onClick={handleClick} disabled={disabled} className="btn btn-primary">
                {disabled ? formatTime() : (
                    <Fragment>
                        <i className="mdi mdi-account-circle" /> Resend Email
                    </Fragment>
                )}
            </button>
        </>
    );
};

