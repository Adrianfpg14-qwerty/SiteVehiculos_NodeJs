"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaRoutes = void 0;
const persona_controller_1 = require("../controllers/persona.controller");
class PersonaRoutes {
    constructor() {
        this.personaController = new persona_controller_1.PersonaController();
    }
    routes(app) {
        app.route("/personas/test").get(this.personaController.test);
        app.route("/personas").get(this.personaController.getAllPersona);
    }
}
exports.PersonaRoutes = PersonaRoutes;
