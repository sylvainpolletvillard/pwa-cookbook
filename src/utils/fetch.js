export default function fetch(url, options = {}) {
	return self.fetch(url, options)
		.then(response => {
			if (!response.ok) throw response;
			return url.endsWith('json') ? response.json() : response.text()
		})
}
