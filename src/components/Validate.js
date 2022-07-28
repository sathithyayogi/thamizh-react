

const Validate = (values) => {
    let errors= [];

    if(!values.name){
        errors.name="Name is Required"
    }
    if(!values.email){
        errors.email="Email is Required"
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid"
    }
  return errors;
}

export default Validate