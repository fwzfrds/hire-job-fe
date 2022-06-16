import axios from 'axios'
import swal from 'sweetalert';

export const register = (data, navigate) => async (dispatch) => {
    try {
        dispatch({ type: 'REGIS_RECRUITER_PENDING' })

        // Post register
        const result = await axios.post(`https://hire-job-server.herokuapp.com/v1/recruiter/register`, data)
        console.log(result)
        swal({
            title: "Good job!",
            text: `Registration Success`,
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

export const login = (data, navigate) => async (dispatch) => {
    try {
        dispatch({ type: 'LOGIN_RECRUITER_PENDING' })

        // Post register
        const result = await axios.post(`https://hire-job-server.herokuapp.com/v1/users/login`, data)
        console.log(result)
        swal({
            title: "Good job!",
            text: `Registration Success`,
            icon: "success"
        });

        const dataLocal = {
            name: result.data.data.full_name,
            id: result.data.data.id,
            email: result.data.data.email,
            role: result.data.data.roles,
            token: result.data.data.token,
            refreshToken: result.data.data.RefreshToken,
        }

        console.log(dataLocal)
        localStorage.setItem('PeworldUser', JSON.stringify(dataLocal))

        dispatch({ type: 'LOGIN_RECRUITER_SUCCESS'})

        navigate('/recruiter/home')

    } catch (error) {
        console.log(error);
        dispatch({ type: 'LOGIN_RECRUITER_ERROR' })
        swal({
            title: "Login",
            text: `Login Error!`,
            icon: "error",
        });
    }
}