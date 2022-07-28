import React, { useEffect, useMemo, useState } from 'react';
import Validate from './Validate';
import Select from 'react-select';
import countryList from 'react-select-country-list';



const Forminput = ({submitForm}) => {

    const [value, setValue] = useState('')
    const options = useMemo(()=> countryList().getData(),[])
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const changeHandler = value => {
        setValue(value)
      }


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const[values, setValues] = useState ({
        name:"",
        email:"",
        mobile:"",
        country:"",
        city:"",
        state:"",
        message:""
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(Validate(values));
        setDataIsCorrect(true);
    };
    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    },[errors]);

  return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Enter your Details</h2>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'>Full name</label>
                    <input className='input' type='text' name='name' value={values.name} onChange={handleChange}/>
                    {errors.name && <p className='error'>{errors.name}</p>}
                </div>
                <div className='email'>
                    <label className='label'>Email</label>
                    <input className='input' type='email' name='email' value={values.email} onChange={handleChange}/>
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <div className='mobile'>
                    <label className='label'>Mobile</label>
                    <input className='input' type='number' name='mobile' value={values.mobile} onChange={handleChange}/>
                </div>
                <div className='country'>
                    <label className='label'>Country</label>
                    <Select  options={options}  value={value} onChange={changeHandler}/>
                </div>
                <div className='city'>
                    <label className='label'>City</label>
                    <input className='input' type='text' name='city' value={values.city} onChange={handleChange}/>
                </div>
                <div className='state'>
                    <label className='label'>State</label>
                    <input className='input' type='text' name='state' value={values.state} onChange={handleChange}/>
                </div>
                <div className='message'>
                    <label className='label'>Message</label>
                    <input className='input' type='text' name='message' value={values.message} onChange={handleChange}/>
                </div>
                <div>
                    <button className='submit' onClick={handleFormSubmit}>
                        Submit
                        </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Forminput