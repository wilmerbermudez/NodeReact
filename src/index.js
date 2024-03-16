import express from 'express';

import empleadoRoutes from './routes/empleado.js'
import solicitudRoutes from './routes/solicitud.js'

const app = express();

app.use(express.json());

app.use('/api', empleadoRoutes);
app.use('/api', solicitudRoutes);

app.listen(3000);
console.log('Server on port', 3000);