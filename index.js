const  express = require('express');
const app = express()

const PORT = 4000;
function handleLinstening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(4000, handleLinstening);