// Importing Modules.

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// Connect to MongoDB
mongoose.connect('mongodb+srv://aleyadb:E2k0yieLOnADxSpU@portfoliocluster-4a1eb.mongodb.net/aleyadb?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('Database successfully connected!'))
  .catch(err => {
    console.log(`Database Connection Error: ${err.message}`);
  });


// Port No.
const port = 3000;

// Adding Middleware
app.use(cors());

// Body-Parser
app.use(bodyparser.json());

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', route);

// Testing Server
app.get('/',(req, res)=>{
    res.send('Your server is running!');
})

app.listen(port,()=> {
    console.log('Server has been successfully started at port '+port);
});