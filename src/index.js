import app from './app.js'
import { PORT } from './config.js'


app.listen(PORT)
console.log("server en el puerto", PORT)