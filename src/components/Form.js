import React, { useState } from 'react';
import Forminput from './Forminput';
import Success from './Success';

const Form = () => {
    const [formISSubmitted, setFormIssubmitted] = useState(false);

    const submitForm = () => {
        setFormIssubmitted(true);
    }
  return (
    <div>
       {!formISSubmitted ? (<Forminput submitForm={submitForm}/> ): (<Success/> )}
    </div>
  )
}

export default Form