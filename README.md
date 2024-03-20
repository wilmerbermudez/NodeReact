# Pasos para ejecutar el proyecto

1. Instalar Node.js en la versión v20.5.0.
2. Ejecutar `npm install` para instalar todas las dependencias utilizadas.
3. Ejecutar script para la base de datos.
4. Usar comando npm run dev en raiz.
5. Usar comando npm start dentro de la carpeta frontend

## Script de la base de datos

```sql
-- CreateTable Empleado
CREATE TABLE "Empleado" (
    "id" SERIAL NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nombre" TEXT NOT NULL,
    "salario" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("id")
);

-- CreateTable Solicitud
CREATE TABLE "Solicitud" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "resumen" TEXT NOT NULL,
    "id_empleado" INTEGER NOT NULL,

    CONSTRAINT "Solicitud_pkey" PRIMARY KEY ("id")
);

-- CreateIndex Empleado_nombre_key
CREATE UNIQUE INDEX "Empleado_nombre_key" ON "Empleado"("nombre");

-- CreateIndex Solicitud_codigo_key
CREATE UNIQUE INDEX "Solicitud_codigo_key" ON "Solicitud"("codigo");

-- AddForeignKey Solicitud_id_empleado_fkey
ALTER TABLE "Solicitud" ADD CONSTRAINT "Solicitud_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

