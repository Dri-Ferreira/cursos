import { adminjs, adminJsRouter } from './adminjs';
import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(adminjs.options.rootPath, adminJsRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started successfuly at port ${PORT}`)
})