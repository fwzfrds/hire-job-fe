import axios from 'axios'
import swal from 'sweetalert';

export const getUser = () => async (dispatch) => {
    try {
        dispatch({ type: 'GET_USER_PENDING' })
        const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/profile/getuser`)
        console.log(result.data)
        const users = result.data

        dispatch({ type: 'GET_USER_SUCCESS', payload: users })

        console.log('Get Users Data Success')

        // swal({
        //     title: "Get Data Success!",
        //     text: `${result.data.message}`,
        //     icon: "success"
        // });
        // navigate('/')

    } catch (error) {
        console.log(error);
        dispatch({ type: 'GET_USER_ERROR' })
        swal({
            title: "Get Users Data Error",
            text: `${error.response.data.message}`,
            icon: "error",
        });
    }
}

export const register = (data) => async (dispatch) => {
    try {
        dispatch({ type: 'REGIS_USER_PENDING' })

        // Post register
        const result = await axios.post(`https://hire-job-server.herokuapp.com/v1/users/register`, data)
        console.log(result)
        swal({
            title: "Good job!",
            text: `Registration Success`,
            icon: "success"
        });

        // Get Data Yang Sudah Ada Regis Tadi
        // const resultGet = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/products?sortby=price&sortorder=desc&page=1&limit=10`)
        // console.log(resultGet.data.data)

        // const users = result.data

        dispatch({ type: 'REGIS_USER_SUCCESS'})

    } catch (error) {
        console.log(error);
        dispatch({ type: 'REGIS_USER_ERROR' })
        swal({
            title: "Error Registration!",
            text: `Registration Denied`,
            icon: "error",
        });
    }
}

export const login = (data, navigate) => async (dispatch) => {
    try {
        dispatch({ type: 'LOGIN_USER_PENDING' })

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

        dispatch({ type: 'LOGIN_USER_SUCCESS'})

        navigate('/')

    } catch (error) {
        console.log(error);
        dispatch({ type: 'LOGIN_USER_ERROR' })
        swal({
            title: "Login",
            text: `Login Error!`,
            icon: "error",
        });
    }
}

export const addSkill = (skill, authToken, navigate) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD_USER_SKILL_PENDING' })

        // Post Add Skill
        const result1 = await axios.post(`${process.env.REACT_APP_API_BACKEND}/v1/profile/skill`, skill, {
            headers: { Authorization: `Bearer ${authToken}` }
        })
        console.log(result1)

        // Get Skill yang sudah terupdate
        const resultGet = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/profile/skill`, {
            headers: { Authorization: `Bearer ${authToken}` }
        })
        console.log(resultGet.data.data)
        const skills = resultGet.data.data

        swal({
            title: "Good job!",
            text: `Add New Skill Success`,
            icon: "success"
        });

        dispatch({ type: 'ADD_USER_SKILL_SUCCESS', payload: skills })

    } catch (error) {
        console.log(error);
        const errMesage = error.response.data.message
        dispatch({ type: 'ADD_USER_SKILL_ERROR' })
        swal({
            title: "Error!",
            text: errMesage === 'token expired' ? errMesage + ' please login' : errMesage,
            icon: "error",
        });
        if (errMesage === 'token expired') {
            localStorage.removeItem('PeworldUser')
            navigate('/jobseeker/login')
        }
    }
}

export const getUserSkill = (authToken) => async (dispatch) => {
    try {
        dispatch({ type: 'GET_USER_SKILL_PENDING' })

        const result = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/profile/skill`, {
            headers: { Authorization: `Bearer ${authToken}` }
        })
        const skills = result.data.data

        dispatch({ type: 'GET_USER_SKILL_SUCCESS', payload: skills })

    } catch (error) {
        console.log(error);
        dispatch({ type: 'GET_USER_SKILL_ERROR' })
        swal({
            title: "Get Users Data Error",
            text: `${error.response.data.message}`,
            icon: "error",
        });
    }
}

export const deleteUserSkill = (authToken, id, skillName) => async (dispatch) => {
    try {
        dispatch({ type: 'DELETE_USER_SKILL_PENDING' })

        // Delete User Skill
        await axios.delete(`${process.env.REACT_APP_API_BACKEND}/v1/profile/skill/${id}`, {
            headers: { Authorization: `Bearer ${authToken}` }
        })
       
        // Get Skill yang sudah terupdate
        const resultGet = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/profile/skill`, {
            headers: { Authorization: `Bearer ${authToken}` }
        })
        console.log(resultGet.data.data)
        const skills = resultGet.data.data

        dispatch({ type: 'DELETE_USER_SKILL_SUCCESS', payload: skills })

        swal({
            title: "Succes",
            text: `Delete ${skillName} skill success`,
            icon: "success",
        });

    } catch (error) {
        console.log(error);
        dispatch({ type: 'DELETE_USER_SKILL_ERROR' })
        swal({
            title: "Delete User Skill Error",
            text: `${error.response.data.message}`,
            icon: "error",
        });
    }
}

export const addExperience = (experience, authToken, navigate) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD_USER_EXPERIENCE_PENDING' })

        // Post Add Skill
        const result1 = await axios.post(`${process.env.REACT_APP_API_BACKEND}/v1/profile/experience`, experience, {
            headers: { Authorization: `Bearer ${authToken}` }
        })
        // console.log(result1)

        // Get Skill yang sudah terupdate
        const resultGet = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/profile/experience`, {
            headers: { Authorization: `Bearer ${authToken}` }
        })
        // console.log(resultGet.data.data)
        const experiences = resultGet.data.data

        swal({
            title: "Good job!",
            text: `Add New Experience Success`,
            icon: "success"
        });

        dispatch({ type: 'ADD_USER_EXPERIENCE_SUCCESS', payload: experiences })

    } catch (error) {
        console.log(error);
        const errMesage = error.response.data.message
        dispatch({ type: 'ADD_USER_EXPERIENCE_ERROR' })
        swal({
            title: "Error!",
            text: errMesage === 'token expired' ? errMesage + ' please login' : errMesage,
            icon: "error",
        });
        if (errMesage === 'token expired') {
            localStorage.removeItem('PeworldUser')
            navigate('/jobseeker/login')
        }
    }
}

export const deleteUserExp = (authToken, id, jobdesk, corps_name) => async (dispatch) => {
    try {
        dispatch({ type: 'DELETE_USER_EXPERIENCE_PENDING' })

        // Delete User Experience
        await axios.delete(`${process.env.REACT_APP_API_BACKEND}/v1/profile/experience/${id}`, {
            headers: { Authorization: `Bearer ${authToken}` }
        })
       
        // Get Experience yang sudah terupdate
        const resultGet = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/profile/experience`, {
            headers: { Authorization: `Bearer ${authToken}` }
        })
        console.log(resultGet.data.data)
        const experiences = resultGet.data.data

        dispatch({ type: 'DELETE_USER_EXPERIENCE_SUCCESS', payload: experiences })

        swal({
            title: "Succes",
            text: `Experience at ${corps_name} as ${jobdesk} has been deleted`,
            icon: "success",
        });

    } catch (error) {
        console.log(error);
        dispatch({ type: 'DELETE_USER_EXPERIENCE_ERROR' })
        swal({
            title: `Delete Experience at ${corps_name} as ${jobdesk} Error`,
            text: `${error.response.data.message}`,
            icon: "error",
        });
    }
}