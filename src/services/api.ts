import axios from 'axios';

const PetsApi = axios.create({
	baseURL: 'http://186.31.177.165:19994/api',
});

export default PetsApi;
