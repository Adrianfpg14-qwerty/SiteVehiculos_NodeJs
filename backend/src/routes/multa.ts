import { Request, Response, Application, Router } from "express";

import { MultaController } from '../controllers/multa.controller';

export class MultaRoutes {
    public multaController: MultaController = new MultaController();

    public routes(app: Application): void {
        app.route("/multas/test").get(this.multaController.test)
        app.route("/multas").get(this.multaController.getAllMulta)
        app.route("/multas/:id").get(this.multaController.getOneMulta)
        app.route("/multas").post(this.multaController.createMulta)
        app.route("/multas/:id").put(this.multaController.updateMulta)
        app.route("/multas/:id").delete(this.multaController.deleteMulta)
    }
}
