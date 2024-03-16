-- CreateTable
CREATE TABLE "Empleado" (
    "id" SERIAL NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nombre" TEXT NOT NULL,
    "salario" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Empleado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solicitud" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "resumen" TEXT NOT NULL,
    "id_empleado" INTEGER NOT NULL,

    CONSTRAINT "Solicitud_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empleado_nombre_key" ON "Empleado"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Solicitud_codigo_key" ON "Solicitud"("codigo");

-- AddForeignKey
ALTER TABLE "Solicitud" ADD CONSTRAINT "Solicitud_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "Empleado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
