import { updateStart, updateSuccess, updateError } from '../redux/userSlicer'
import axios from 'axios'
export const apicall = async (user, dispatch) => {

    dispatch(updateStart())
    try {
        const res = await (axios.post("http://localhost:8800/apicall/users/123/update", user))
        console.log(res.data)
        dispatch(updateSuccess(res.data))
    }
    catch (err) {
        dispatch(updateError())
    }
}