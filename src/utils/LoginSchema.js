import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape(
    {
        name : Yup.string()
            .required("Name is required"),
        lastName : Yup.string()
            .required("LastName is required"),
        phone : Yup.string()
            .required("Phone Number is required"),        
        email : Yup.string()
            .email("Invalid email address format")
            .required("Email is required"),
        password: Yup.string()
            .min(3, "Password must be 3 characters at minimum")
            .required("Password is required")    
    }
)