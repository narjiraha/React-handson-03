
import React from 'react';

const FormData = ({ value, tf }) => {
    return (
        <>
            <h1>Employee Feedback Form</h1>

            <div className='conainer'>
                <div className='dataContainer'>
                    {value.map((item) => (
                        <div className='data'>
                            <p key={item.name}>Name : {item.name}| Department {item.department}| Rating: {item.rating}|</p>
                        </div>
                    ))}

                </div>

            </div>
            <button className='submit' onClick={tf}>Go Back</button>
        </>
    );
};

export default FormData;

