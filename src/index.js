import express from 'express';

import empleadoRoutes from './routes/empleado.js'
import solicitudRoutes from './routes/solicitud.js'
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', empleadoRoutes);
app.use('/api', solicitudRoutes);

app.listen(3001);
console.log('Server on port', 3001);