import axios from 'axios';

const PetsApi = axios.create({
	baseURL: 'http://186.154.135.199:19994/api',
});

export default PetsApi;
