"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoRoutes = void 0;
const vehiculo_controller_1 = require("../controllers/vehiculo.controller");
class VehiculoRoutes {
    constructor() {
        this.vehiculoController = new vehiculo_controller_1.VehiculoController();
    }
    routes(app) {
        app.route("/vehiculos/test").get(this.vehiculoController.test);
        app.route("/vehiculos").get(this.vehiculoController.getAllVehiculo);
    }
}
exports.VehiculoRoutes = VehiculoRoutes;
