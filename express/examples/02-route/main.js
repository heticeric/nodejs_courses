import express from 'express';
const app = express();

// Default route
app.get
(
    '/'
    , (req, res) => res.send('Hello World!')
);

// Launch the server
app.listen
(
    3000
    , () => console.log('Example app listening on port 3000!')
);