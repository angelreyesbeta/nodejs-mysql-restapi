import app from "./app.js"
import { PORT } from "./config.js";

app.listen(PORT)
console.info('Server running on port ', PORT)