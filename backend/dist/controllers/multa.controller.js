"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultaController = void 0;
const Multa_1 = require("../models/Multa");
class MultaController {
    test(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.send('hola, metodo test para Multa');
            }
            catch (error) {
            }
        });
    }
    getAllMulta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const multa = yield Multa_1.Multa.findAll({
                    where: { activo: true }
                }); // select * from multas;
                res.status(200).json({ multa });
            }
            catch (error) {
            }
        });
    }
}
exports.MultaController = MultaController;
