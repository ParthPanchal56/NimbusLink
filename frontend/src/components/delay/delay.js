import React from 'react'

export default function Delay({ time }) {

    let timeInSeconds = time * 1000;
    setTimeout(() => { }, timeInSeconds);

    return (
        <div hidden></div>
    )
}
