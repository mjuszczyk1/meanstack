const express    = require('express');
const thePath    = require('path');
const bodyParser = require('body-parser');

const index = require ('./routes/index');
const tasks = require ('./routes/tasks');

var app = express();

var port = 3000;

//view Engine
app.set('views', thePath.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(thePath.join(__dirname, 'client')));

// body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log(`server started on port ${port}`);
});