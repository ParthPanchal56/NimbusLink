import { useField } from 'formik';
import React from 'react';

function RadioInput({ label, ...props }) {
    const [field, meta] = useField(props);

    return (
        <>

            <div className="custom-control custom-radio custom-control-inline">
                <input type={field.type} id={field.value} name={field.name} class="custom-control-input" {...field} {...props} />
                <label class="custom-control-label" for={field.value}>{field.value}</label>
            </div>

            {
                meta.touched && meta.error ? (
                    <div class="alert alert-warning" role="alert" style={{ paddingTop: '1px', paddingBottom: '1px', marginBottom: '1px', marginTop: '1px' }}>
                        {meta.error}
                    </div>
                ) : null
            }
        </>
    );
}

export default RadioInput;
