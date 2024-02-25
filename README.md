# Project Name

Image Filter Starter Code (Cloud Developer Udacity)

---

## Getting Started

This Node.js Express application serves as an image filtering API. It allows authorized users to submit a public image URL via a GET request, and the API filters the image using an external filtering service (implementation details not provided). The filtered image is then returned as a response and subsequently deleted from the server to maintain storage efficiency.

### Prerequisites

- Node.js and npm installed on your system.

## Installation

1. Clone or download the project repository.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies:
  ```sh
   npm install
   ```
## Configuration

1. Environment Variables:
Create a .env file in the project root directory (if it doesn't exist).
Add the following environment variables to the .env file:
`BEARER_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.XXXXXXXX`
2. Optional:
If you intend to use a different port than the default (8082), set the PORT environment variable according

## Usage

1. Start the server:
  ```sh
   npm start
   ```
2. Authorization:
Include the Authorization header in your GET requests, setting its value to `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.XXXXXXXX`, or replacing `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.XXXXXXXX` with your env bearer token.

3. Filtering an Image:
Send a GET request to: http://localhost:8082/filteredimage?image_url={{URL}}
Replace {{URL}} with the public URL of the image you want to filter

Example: `http://localhost:8082/filteredimage?image_url=https://assets-global.website-files.com/5fda3048302e579473bfb454/6137dd08cae132de9fac1923_Slite%20handbook%20wiki.png`

## Response:
The server will respond with the filtered image data if successful. If errors occur, appropriate error messages will be returned.

## Note output:
- A screenshot of the elastic beanstalk application dashboard after deploymentAWS elasticbeanstalk: [https://github.com/vomanhhung1995/projectstartercode/blob/master/deployment_screenshots/ElasticBeanstalk.png](https://github.com/vomanhhung1995/projectstartercode/blob/master/deployment_screenshots/ElasticBeanstalk.png)
- A link to the endpoint URL for a running elastic beanstalk deployment: [http://projectstartercode-dev.us-east-1.elasticbeanstalk.com/](http://projectstartercode-dev.us-east-1.elasticbeanstalk.com/)
- Evidence run local and deploy elasticbeanstalk: [https://github.com/vomanhhung1995/projectstartercode/tree/master/deployment_screenshots/runsource_and_deploy](https://github.com/vomanhhung1995/projectstartercode/tree/master/deployment_screenshots/runsource_and_deploy)
- Postman collection: https://github.com/vomanhhung1995/projectstartercode/blob/master/deployment_screenshots/udacity-hungvm1%40fpt.com.postman_collection.json

## Contact:

- ManhHung - vomanhhung1995@gmail.com
- Project Link: `https://github.com/vomanhhung1995/projectstartercode/tree/master`
