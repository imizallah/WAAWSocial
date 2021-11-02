import axios from 'axios';
import toast from 'react-hot-toast';


export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });

  try {
    let res = await axios.post('https://api-waawsoc.herokuapp.com/api/v1/auth/login', userCredentials);
    if(res.data.success) toast.success(res.data.msg);
    
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data });
  }catch(err) { 
    if(!err.response.data.success) return toast.error(err.response.data.msg);
    dispatch({ type: 'LOGIN_FAILURE', payload: err });
  }
}