import { Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Multa, MultaI } from '../models/Multa';

export class MultaController {


    public async test(req: Request, res: Response) {
        try {
            res.send('hola, metodo test para Multa')
        } catch (error) {

        }
    }

    public async getAllMulta(req: Request, res: Response) {
        try {
            const multas: MultaI[] = await Multa.findAll();
            res.status(200).json({ multas })
        } catch (error) {

        }
    }

    public async createMulta(
        req: Request,

        res: Response
    ) {
        const {
            consecutivoDeMultas,
            fechaYHora,
            lugarInfracion,
        } = req.body;

        try {
            let body: MultaI = {
                consecutivoDeMultas,
                fechaYHora,
                lugarInfracion,
            };

            const multa: MultaI = await Multa.create({ ...body });
            res.status(200).json({ multa });
        } catch (error) { }
    }

    public async getOneMulta(req: Request, res: Response) {
        const { id: idParam } = req.params;

        try {
            const multa: MultaI | null = await Multa.findOne({
                where: {
                    id: idParam,
                },
            });
            if (multa != null) {
                res.status(200).json({ multa });
            } else return res.status(300).json({ msg: "La Multa no existe" });
        } catch (error) {
            res.status(500).json({ msg: "Error Internal" });
        }
    }

    public async updateMulta(req: Request, res: Response) {
        const { id: pk } = req.params;

        const {
            id,
            consecutivoDeMultas,
            fechaYHora,
            lugarInfracion,
        } = req.body;
        try {
            let body: MultaI = {
                consecutivoDeMultas,
                fechaYHora,
                lugarInfracion,
            };
            const multaExist: MultaI | null = await Multa.findByPk(pk);
            // const userExist: UsuarioI | null = await Usuario.findOne(
            //     {
            //         where: { id: pk}
            //     }
            // );

            if (!multaExist)
                return res.status(500).json({ msg: "La Multa No existe" });
            await Multa.update(body, {
                where: { id: pk },
            }); // select update from usuarios where id=pk
        } catch (error) { }
        const multa: MultaI | null = await Multa.findByPk(pk);
        if (multa) return res.status(200).json({ multa });
    }
    public async deleteMulta(req: Request, res: Response) {
        const { id: pk } = req.params;

        try {
            const multaExist: MultaI | null = await Multa.findByPk(pk);
            if (!multaExist)
                return res.status(500).json({ msg: "La Multa No existe" });
            await Multa.destroy({
                where: { id: pk },
            });
            res.status(200).json({ msg: "Multa Eliminada" });
        } catch (error) { }
    }

}
