<span class="requirements">Prerequisites: reading the page <a href="network-management.md">Network management layer</a></span>

# Handling and retrying failed requests

The different `http` functions described in the above code snippets are wrappers over the `fetch` API. They will be used in all AJAX calls in the application code. The function of this additional layer is to handle requests errors that could not be handled by the Service Worker.

The next paragraphs will give some strategies for handling and retrying failed requests.

## Retry at the user initiative

This basic example blocks the user when an error occurs and then asks him to retry the failed request or abandon it.

```javascript
function http(...args){
    return fetch(...args).catch(err => {
		if(confirm(`The request failed: ${err.message} . Retry ?`)){
			return http(...args)
		}
		else throw err
    })
}
```

This dialog box is blocking and is a very limited and annoying solution for the user. Let's see how to improve this.

## Automatic retry with a progressive delay

Here, failed requests are automatically relaunched after waiting for a delay which increases progressively after each attempt. In the following example, the delay extends indefinitely, but we can of course add a termination condition that rejects the `Promise`.

```javascript
const wait = time => new Promise(resolve => setTimeout(resolve, time));

function http(url, params, delay=1000){
    return fetch(url, params).catch(err => {
		// wait 1 second then increase the delay (fibonacci style)
		return wait(delay).then(() => http(url, params, delay * 21/13))
    })
}
```

## Queue of failed requests

The two previous strategies do not take into account the order in which the callbacks are called. If it is important for your PWA to process responses in the same order of emission their respective requests, then we need to store these requests in a waiting queue and we execute each request in order one by one. In case of failure, we wait for 5 seconds before retrying the same request.

```javascript
const requestQueue = [];

function http(...args){
	return new Promise(resolve => {
		requestQueue.push({ args, resolve }); // add to the queue
		if(requestQueue.length === 1) tryNextRequest() // try immediately if first
	})
}

function tryNextRequest(){
	let request = requestQueue[0]; // try first request in stack
	return request && fetch(...request.args).then(response => {
		request.resolve(response); // success, resolve http() promise
		requestQueue.shift(); // remove successful request from queue
		tryNextRequest() // try the next one in stack
	}).catch(err => wait(5000).then(tryNextRequest)) // fail, try again later
}
```

This strategy is appropriate for complex offline modes where we allow the user to perform actions that depend on previous actions that where not processed by the server. When the connection is recovered, it is then essential to launch again these order in the correct order.

For further improvement, we can replace the fixed delay by a progressive one such as the previous solution. We can also detect duplicates in the waiting queue. It is up to you to progressively choose your strategy :).

---

[Network management layer](network-management.md)

[Cache strategies](network-strategies.md)
