import axios from 'axios'
import swal from 'sweetalert';

export const getUser = () => async (dispatch) => {
    try {
        dispatch({ type: 'GET_USER_PENDING' })
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users`)
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