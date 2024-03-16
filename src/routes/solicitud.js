import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.get('/solicitud', async (req, res) =>{
    const solicitudes = await prisma.solicitud.findMany({
        include:{
            empleado: {
                select: {
                    nombre: true,
                },
                },
            }
    });
    const resSolicitud = solicitudes.map(solicitud => ({
        id: solicitud.id,
        codigo: solicitud.codigo,
        descripcion: solicitud.descripcion,
        resumen: solicitud.resumen,
        empleado: solicitud.empleado.nombre
      }));
    return res.json(resSolicitud);
})


router.post("/agregarSolicitud", async (req,res) =>{
    const newSolicitud = await prisma.solicitud.create({
        data: req.body,
    })
    return res.status(201).send(newSolicitud);
})

router.delete('/deleteSolicitud/:id', async (req, res) =>{   
    const deleteSolicitud = await prisma.solicitud.delete({
        where: {
            id: parseInt(req.params.id),
        }
    })

    return res.json(deleteSolicitud);
})

export default router;