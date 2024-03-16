import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.get('/empleadoNombre/:nombreEmpleado', async (req, res) =>{   
    const empleado = await prisma.empleado.findUnique({
        where: {
            nombre: req.params.nombreEmpleado
        }
    })
    if (!empleado)
    return res.status(400).json({error: "El Empleado no existe"});

    return res.json(empleado);
})


router.get('/empleados', async (req, res) =>{
    const empleado = await prisma.empleado.findMany();
    return res.json(empleado);
})

router.post("/agregarEmpleado", async (req,res) =>{
    const newEmpleado = await prisma.empleado.create({
        data: req.body,
    })
    return res.status(201).send(newEmpleado);
})

export default router;