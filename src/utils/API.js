import axios from 'axios';
export default {
	getRandomEmployee : function() {
		return axios.get('https://api.github.com/orgs/github/public_members');
	},
	getEmployee       : function(name) {
		return axios.get(
			'https://api.github.com/orgs/github/public_members/' + name
		);
	}
};
