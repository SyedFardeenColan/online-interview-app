import './Login.css'
import { useFormik } from 'formik'
import { TextField } from '@mui/material'; 
import Google from '../../images/google.png'
import Facebook from '../../images/facebook.png'
import Apple from '../../images/apple.png'
import { Link } from 'react-router-dom';
import { LoginSchema } from '../../utils/LoginSchema';

export default function Login(){

    const formik = useFormik({
        initialValues:{
            email: '',
            password : ''
        },
        validationSchema:LoginSchema,
        onSubmit:(values)=>{
            console.log("Form Submitted..")
        }
    });

    return(
        <div className='container'>
            <h2>Lets Sign you in</h2>
            <div className='login-note'>
                <span>Welcome Back ,</span>
                <span>You have been missed</span>
            </div>
            <form onSubmit={formik.handleSubmit}>

                <TextField 
                    className='form-input'
                    id="outlined-basic" 
                    label="Email Address" 
                    name='email'
                    variant="outlined" 
                    type='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    
                />
                <TextField
                    className='form-input' 
                    id="outlined-basic" 
                    label="Password" 
                    name='password'
                    variant="outlined" 
                    type='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    
                />
                <span className='forget-pass-btn'>Forgot Password ?</span>

                <button className='signin-btn'>Sign in</button>

            </form>
            <span className='divider'>or</span>
            
            <div className='signin-option-conatiner'>
                <img src={Google} alt='Google'/>
                <img src={Facebook} alt='Facebook'/>
                <img src={Apple} alt='Apple'/>
            </div>

            <span className='register-note'>
                Don't have an account ? <Link to="/register"><b>Register Now</b></Link>
            </span>

        </div>
    )
}