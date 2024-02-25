import express from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles } from './util/util.js';

// Init the Express application
const app = express();

// Set the network port
const port = process.env.PORT || 8082;

// Use the body parser middleware for post requests
app.use(bodyParser.json());

// Bearer Token
const bearerToken = process.env.BEARER_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.XXXXXXXX';

// GET /filteredimage?image_url={{URL}} endpoint to filter an image from a public url.
app.get("/filteredimage", async (req, res) => {
  const { image_url } = req.query;
  const authHeader = req.headers['authorization'];

  // Validate token
  if (!authHeader || authHeader.split(' ')[1] !== bearerToken) {
    return res.status(401).send('Unauthorized, please input token!');
  }

  // Check if image_url parameter exists
  if (!image_url) {
    return res.status(400).send("image_url parameter is required");
  }

  try {
    // Filter the image
    const filteredpath = await filterImageFromURL(image_url);

    // Send the result file in the response
    res.sendFile(filteredpath, async () => {
      // Delete the filtered image file from the server
      await deleteLocalFiles([filteredpath]);
    });
  } catch (error) {
    // If an error occurs, return an error response
    console.error("Error filtering image:", error);
    return res.status(500).send("Error filtering image");
  }
});

// Root Endpoint
// Displays a simple message to the user
app.get("/", async (req, res) => {
  res.send("try GET /filteredimage?image_url={{}}")
});


// Start the Server
app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
  console.log(`press CTRL+C to stop server`);
});
