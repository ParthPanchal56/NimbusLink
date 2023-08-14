import React from 'react'

export default function Loader1({ size, type, loading }) {
    return (
        <div className={`spinner-border avatar-${size} text-${type}`} role="status" loading={loading}></div>
    )
}
