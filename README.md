# Technologies
![Nodejs](https://img.shields.io/badge/Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Javascript](https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F)
![VSCode](https://img.shields.io/badge/Visual_Studio-0078d7?style=for-the-badge&logo=visual%20studio&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

# URL-SHORTNER
This API uses redis to cache a URL and its respective shortener.
A API to shorten a received URL that must meet the following requirements:
<ul>
  <li>The URL shortener receives a long URL as the initial parameter.</li>
  <li>The shortened URL will consist of a minimum of 05 and a maximum of 10 characters.</li>
  <li>Only letters and numbers are allowed in the shortening.</li>
  <li>The shortened URL will be saved in the database with an expiration date (you can choose the desired duration).</li>
  <li>Upon receiving a request for the shortened URL https://xxx.com/DXB6V, you should redirect to the original URL saved in the database.</li>
  <li>If the URL is not found in the database, return HTTP status code 404 (Not Found).</li>
</ul>

# Endpoints
<h3>Shorten URL</h3>
<ul>
  <li>[POST] {{host}}/shorten-url</li>
  <li>Request query fields: <pre>url</pre></li>
  
    `json
    {
        "url": "https://backendbrasil.com.br"
    }
    `
  <li>Responses</li>
  <ul>
    <li>`HTTP/1.1 200 OK`</li>
    <li>`HTTP 404 (Not Found)`</li>
  </ul>
</ul>

## How to Run
<ol>
    <li>Install redis following https://redis.io/docs/install/ </li>
    <li>Start a redis service at your host using sudo service redis-server start </li>
    <li>Install dependencies using: <pre>npm install</pre></li>
    <li>Start the server using the following command on your terminal: <pre>npm run start</pre></li>
</ol>
The application will be available by default at <code>http://localhost:3000/shorten-url</code>
