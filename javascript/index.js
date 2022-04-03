const http = require('http');
const fs = require('fs');

const getJsonData = (filename) => {
	// get from other server
	const data = fs.readFileSync(filename, 'utf8');
	return data;
};

// FilterField for filter data with spesific field, ex. 'username' or 'id'
const getDataWithImproved = (filterField, filterVal) => {
	const data = getJsonData('raw.json');

	let objs = JSON.parse(data);
	if (objs.length == 0) {
		return null;
	}

	const objHeaders = Object.keys(objs[0]);

	if (filterField && filterVal && objHeaders.includes(filterField)) {
		objs = objs.filter((obj) => obj[filterField] === filterVal);
	}

	const result = {};
	result['h'] = objHeaders;
	result['d'] = [];
	objs.forEach((obj) => {
		temp = [];
		objHeaders.forEach((head) => {
			temp.push(obj[head]);
		});
		result['d'].push(temp);
	});

	return result;
};

const listener = (req, res) => {
	const uri = req.url.split('/');
	if (uri[1] !== 'user' || req.method !== 'GET') {
		res.end('<a href="/user">Get All User</a><br><a href="/user/ali">Get User by Username</a>');
		return;
	}

	let data;
	if (uri[2] && uri[2] !== '') {
		// Default filter username
		data = getDataWithImproved('username', uri[2]);
	} else {
		data = getDataWithImproved();
	}
	res.end(JSON.stringify(data));
};

const server = http.createServer(listener);
server.listen(3333, 'localhost', () => {
	console.log('Server is listening on port 3333');
});
