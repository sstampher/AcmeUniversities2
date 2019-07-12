import { FETCH_SCHOOLS , NEW_POST } from './types';
import Axios from 'axios';

export const fetchSchools = () => async dispatch => {
     console.log('thunk is working')
        try{
            const x = await Axios.get('/api/customers');
            const response = x.data;
            dispatch({
                type: FETCH_SCHOOLS ,
                payload: response
            })
        }
        catch(err){
            console.log('there was an error');
        }
    
}