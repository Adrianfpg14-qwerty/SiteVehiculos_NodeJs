"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultaRoutes = void 0;
const multa_controller_1 = require("../controllers/multa.controller");
class MultaRoutes {
    constructor() {
        this.multaController = new multa_controller_1.MultaController();
    }
    routes(app) {
        app.route("/multas/test").get(this.multaController.test);
        app.route("/multas").get(this.multaController.getAllMulta);
    }
}
exports.MultaRoutes = MultaRoutes;
