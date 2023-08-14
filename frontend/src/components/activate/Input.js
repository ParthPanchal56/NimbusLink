// Activate Input

import React from 'react'
import { useField } from 'formik'

export default function Input({ label, ...props }) {
    const [field, meta] = useField(props)
    return (
        <>
            <div className="form-group">
                <label>{label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    name={field.name}
                    required=""
                    {...field}
                    {...props}
                />
                {
                    meta.touched && meta.error ? (
                        <div className="alert alert-warning" role="alert" style={{ paddingTop: '1px', paddingBottom: '1px', marginBottom: '1px', marginTop: '1px' }}>
                            {meta.error}
                        </div>
                    ) : null
                }
            </div>
        </>
    )
}
