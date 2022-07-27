import axios from 'axios'
import swal from 'sweetalert';

export const register = (data, navigate) => async (dispatch) => {
    try {
        dispatch({ type: 'REGIS_RECRUITER_PENDING' })

        // Post register
        const result = await axios.post(`${process.env.REACT_APP_API_BACKEND}/v1/recruiter/register`, data)
        console.log(result)
        swal({
            title: "Good job!",
            text: `Login Success`,
            icon: "success"
        });

        dispatch({ type: 'REGIS_RECRUITER_SUCCESS'})

        navigate('/recruiter/login')

    } catch (error) {
        console.log(error);
        dispatch({ type: 'REGIS_RECRUITER_ERROR' })
        swal({
            title: "Error Registration!",
            text: `Registration Denied, Email already taken`,
            icon: "error",
        });
    }
}

export const login = (loginData, navigate) => async (dispatch) => {
    try {
        dispatch({ type: 'LOGIN_RECRUITER_PENDING' })

        // Post register
        const result = await axios.post(`${process.env.REACT_APP_API_BACKEND}/v1/recruiter/login`, loginData)
        console.log(result)
        swal({
            title: "Good job!",
            text: `Registration Success`,
            icon: "success"
        });

        const dataLocal = result.data.data

        console.log(dataLocal)
        localStorage.setItem('PeworldAdmin', JSON.stringify(dataLocal))

        dispatch({ type: 'LOGIN_RECRUITER_SUCCESS'})

        navigate('/recruiter/home')

    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOGIN_RECRUITER_ERROR' })
        // swal({
        //     title: "Login",
        //     text: `Login Error!`,
        //     icon: "error",
        // });
        throw error
    }
}