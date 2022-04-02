const http = require('http');
const fs = require('fs');

const getJsonData = (filename) => {
	const data = fs.readFileSync(filename, 'utf8');
	return data;
};

const changeFormat = () => {
	const data = getJsonData('raw.json');

	const objs = JSON.parse(data);
	if (objs.length == 0) {
		return null;
	}

	const objHeaders = Object.keys(objs[0]);

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
	if (req.url === '/user') {
		const result = changeFormat();
		res.end(JSON.stringify(result));
	} else {
		res.end('<a href="/user">get all user</a>');
	}
};

const server = http.createServer(listener);
server.listen(3333, 'localhost', () => {
	console.log('Server is listening on port 3333');
});
