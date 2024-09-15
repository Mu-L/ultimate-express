// must support app.path()

import express from "express";

const app = express();
const app2 = express();

app.set('case sensitive routing', true);
app.set('jsonp callback name', 'cb');

app.use('/abc', app2);


console.log(app2.get('case sensitive routing'));
console.log(app2.get('jsonp callback name'));
