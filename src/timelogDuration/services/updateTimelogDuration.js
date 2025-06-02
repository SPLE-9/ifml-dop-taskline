import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const updateTimelogDuration = (data = {}) => {
	let body = data;

	const { getToken } = tokenManager();
	const token = getToken();
	
	return axios.put(`${environment.rootApi}/call/timelogduration/update`, body,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})} 
export default updateTimelogDuration
