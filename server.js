const express = require('express');
const app = express();
const path = require('path');



const port = 1001 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')))


app.listen(port, () => {
    console.log(`server is running at port number ${port}`)
});