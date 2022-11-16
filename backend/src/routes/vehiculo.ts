import { Request, Response, Application, Router } from "express";

import { VehiculoController } from '../controllers/vehiculo.controller';

export class VehiculoRoutes {
    public vehiculoController: VehiculoController = new VehiculoController();

    public routes(app: Application): void {
        app.route("/vehiculos/test").get(this.vehiculoController.test)
        app.route("/vehiculos").get(this.vehiculoController.getAllVehiculo)
        app.route("/vehiculos/:id").get(this.vehiculoController.getOneVehiculo)
        app.route("/vehiculos").post(this.vehiculoController.createVehiculo)
        app.route("/vehiculos/:id").put(this.vehiculoController.updateVehiculo)
        app.route("/vehiculos/:id").delete(this.vehiculoController.deleteVehiculo)
    }
}
