const express = require('express')

const app = express();

const PORT = 8000;

app.post( '/api/contact',(req , res)=>{

});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});