import './Register.css'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material'; 
import { LoginSchema } from '../../utils/LoginSchema';

export default function Register(){

    const formik = useFormik({
        initialValues:{
            name:'',
            lastName:'',
            email:'',
            phone:'',
            password:''
        },
        validationSchema:LoginSchema,
        onSubmit:()=>{
            console.log("Form submitted...")
        }
    })

    return(
        <div className='register-body'>

            <div className='register-container'>
                 <h2>Lets Register<br/><center>Account</center></h2>
                 <div className='sign-up-note'>
                    <span>Hello user ,you have</span>
                    <span>a greatful journey</span>
                </div>

                <form>

                    <TextField 
                        className='form-input'
                        id="outlined-basic" 
                        label="Name" 
                        name='name'
                        variant="outlined" 
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        error={formik.touched.name && formik.errors.name}
                        helperText={formik.touched.name && formik.errors.name}
                    />

                    <TextField
                        className='form-input' 
                        id="outlined-basic" 
                        label="Last Name" 
                        name='lastName'
                        variant="outlined" 
                        type='text'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        error={formik.touched.name && formik.errors.lastName}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />

                    <TextField
                        className='form-input' 
                        id="outlined-basic" 
                        label="Phone" 
                        variant="outlined" 
                        type='number'
                        name='phone'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        error={formik.touched.phone && formik.errors.phone}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />  

                    <TextField
                        className='form-input' 
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined" 
                        type='email'
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={formik.touched.email && formik.errors.email}
                        helperText={formik.touched.email && formik.errors.email}
                    />  

                    <TextField
                        className='form-input' 
                        id="outlined-basic" 
                        label="Password" 
                        variant="outlined" 
                        type='password'
                        name='password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        error={formik.touched.password && formik.errors.password}
                        helperText={formik.touched.password && formik.errors.password}
                    />  
                    <button className='signin-btn'>Sign in</button>

                </form>

                <span className='register-note'>
                    Already have an account ?  <Link to={"/"}><b>Login</b></Link> 
                </span>
             </div>

        </div>
        
    )
}