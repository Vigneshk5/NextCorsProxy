# NextCorsProxy

This is a self-deployable CORS proxy built using Next.js. It allows you to bypass CORS restrictions by forwarding requests to a specified URL.

## Features

- Supports `GET` requests
- Adds CORS headers to responses
- Deployable on Vercel or Netlify

## Deployment

### Deploy to Vercel or Netlify

1. **Fork this repository**.
2. **Deploy to Vercel or Netlify** using their respective dashboards.
3. Set up any necessary configurations in the deployment platform.

## Usage

You can use the proxy by making a GET request to:

```
https://your-deployment-url.vercel.app/api/proxy?url=https://example.com
```

Replace `https://example.com` with the URL you want to fetch.

## API Endpoints

### `GET /api/proxy?url=<target_url>`

- Fetches the content from the specified `target_url` and returns it with CORS headers.

## Example

Fetch data using JavaScript:

```js
fetch("https://your-deployment-url.vercel.app/api/proxy?url=https://example.com")
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

## License

This project is open-source and available under the MIT License.
