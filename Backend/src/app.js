import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors())  // allow our server to handle requests coming from different origins or domains.
app.use(express.json({limit:"16kb"}))  // this middleware is used to parse the incoming request bodies with JSON playload.
app.use(express.urlencoded({extended:true})) // this middleware help to parse the incomming request bodies with url-encoded playloads.
// app.use(express.static("public")) // this middleware is used to server static files such as images,css files, javascript files, etc. from the specified directory
app.use(cookieParser())

import userRouter from './Router/user.router.js';
app.use('/users',userRouter)

export {app}

