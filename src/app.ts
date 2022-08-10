import express from 'express';
import pageRouter from "./pages";

const cookieParser = require('cookie-parser');
const cors = require('cors')
const app = express();


app.use(cors({
    credentials: true,
    origin: true
}))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.set('port', process.env.PORT);

app.use('/', pageRouter);

app.listen(app.get('port'), () => {
    console.log(`Server is listening ${app.get('port')} port.`);
});