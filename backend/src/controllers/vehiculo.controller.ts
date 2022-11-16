import { Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Vehiculo, VehiculoI } from '../models/Vehiculo';

export class VehiculoController {


    public async test(req: Request, res: Response) {
        try {
            res.send('hola, metodo test para Vehiculo')
        } catch (error) {

        }
    }

    public async getAllVehiculo(req: Request, res: Response) {
        try {
            const vehiculos: VehiculoI[] = await Vehiculo.findAll();
            res.status(200).json({ vehiculos })
        } catch (error) {

        }
    }

    public async createVehiculo(
        req: Request,

        res: Response
    ) {
        const {
            matricula,
            marca,
            modelos,
        } = req.body;

        try {
            let body: VehiculoI = {
                matricula,
                marca,
                modelos,
            };

            const vehiculo: VehiculoI = await Vehiculo.create({ ...body });
            res.status(200).json({ vehiculo });
        } catch (error) { }
    }

    public async getOneVehiculo(req: Request, res: Response) {
        const { id: idParam } = req.params;

        try {
            const vehiculo: VehiculoI | null = await Vehiculo.findOne({
                where: {
                    id: idParam,
                },
            });
            if (vehiculo != null) {
                res.status(200).json({ vehiculo });
            } else return res.status(300).json({ msg: "El Vehiculo no existe" });
        } catch (error) {
            res.status(500).json({ msg: "Error Internal" });
        }
    }

    public async updateVehiculo(req: Request, res: Response) {
        const { id: pk } = req.params;

        const {
            id,
            matricula,
            marca,
            modelos,
        } = req.body;
        try {
            let body: VehiculoI = {
                matricula,
                marca,
                modelos,
            };
            const vehiculoExist: VehiculoI | null = await Vehiculo.findByPk(pk);
            // const userExist: UsuarioI | null = await Usuario.findOne(
            //     {
            //         where: { id: pk}
            //     }
            // );

            if (!vehiculoExist)
                return res.status(500).json({ msg: "La Vehiculo No existe" });
            await Vehiculo.update(body, {
                where: { id: pk },
            }); // select update from usuarios where id=pk
        } catch (error) { }
        const vehiculo: VehiculoI | null = await Vehiculo.findByPk(pk);
        if (vehiculo) return res.status(200).json({ vehiculo });
    }
    public async deleteVehiculo(req: Request, res: Response) {
        const { id: pk } = req.params;

        try {
            const vehiculoExist: VehiculoI | null = await Vehiculo.findByPk(pk);
            if (!vehiculoExist)
                return res.status(500).json({ msg: "La Vehiculo No existe" });
            await Vehiculo.destroy({
                where: { id: pk },
            });
            res.status(200).json({ msg: "Vehiculo Eliminada" });
        } catch (error) { }
    }

}
