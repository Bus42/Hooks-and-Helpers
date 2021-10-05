# axiosWithAuth

## Usage

Accepts an object with properties of:

*examples:*

### Fetching data from API

```
  axiosWithAuth({
    method: "get",
    endpoint: "/friends"
  })
    .then((res) => {})
    .catch((err) => {});
```

### Posting new info to API

```
  axiosWithAuth({
    method: "post",
    endpoint: "/friends",
    body: {friend}
  })
    .then((res) => {})
    .catch((err) => {});
```

baseURL, timeout, and headers are defined in the `instance` constant

## Return Values
Return values will be the same as axios return values


## Error Handling
I left error management up to the consuming app in case you want to dispatch actions or otherwise manipulate data returned. I have included a standard error handling example below from [axios docs](https://axios-http.com/docs/handling_errors).

```
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

## Why a switch statement?

Using a switch statement allows for configurability of actions. For instance, if you need to curry or shape data before returning it to the consuming function or if you need to add additional information to the request before it is sent.