"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const persona_1 = require("./persona");
const multa_1 = require("./multa");
const vehiculo_1 = require("./vehiculo");
class Routes {
    constructor() {
        this.personaRoutes = new persona_1.PersonaRoutes();
        this.multaRoutes = new multa_1.MultaRoutes();
        this.vehiculoRoutes = new vehiculo_1.VehiculoRoutes();
    }
}
exports.Routes = Routes;
