import axios from 'axios';

function get(url: string) {
	return axios.get(url);
}

export default {
	get
};
