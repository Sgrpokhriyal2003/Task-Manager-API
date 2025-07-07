import express from 'express'
import morgan from 'morgan'
import { configDotenv } from 'dotenv'
configDotenv()
import session from 'express-session'

//local import
import { connectDB } from './config/db.js'
import userRoute from './router/user-route.js'
import taskRoute from './router/task-route.js'

const app = express()
const PORT = process.env.PORT || 4001

//global middleware
app.use(express.json());
app.use(morgan("dev"))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 600000}
}))


app.get("/", (req, res) => {
    res.send("welcome to authentication class!")
})

//use routes
app.use("/api/user", userRoute);
app.use("/api/task", taskRoute);

connectDB()
.then(() => {
    app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
    })
})
.catch((error) => {
    console.error('error connecting to the db', error.message);
})

