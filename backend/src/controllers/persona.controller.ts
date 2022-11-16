import { Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Persona, PersonaI } from '../models/Persona';

export class PersonaController {


    public async test(req: Request, res: Response) {
        try {
            res.send('hola, metodo test para Persona')
        } catch (error) {

        }
    }

    public async getAllPersona(req: Request, res: Response) {
        try {
            const personas: PersonaI[] = await Persona.findAll();
            res.status(200).json({ personas })
        } catch (error) {

        }
    }

    public async createPersona(
        req: Request,

        res: Response
    ) {
        const {
            dni,
            nombre,
            apellidos,
            direccion,
            telefono,
            ciudad,
            tipoDePersonas,
        } = req.body;

        try {
            let body: PersonaI = {
                dni,
                nombre,
                apellidos,
                direccion,
                telefono,
                ciudad,
                tipoDePersonas,
            };

            const persona: PersonaI = await Persona.create({ ...body });
            res.status(200).json({ persona });
        } catch (error) { }
    }

    public async getOnePersona(req: Request, res: Response) {
        const { id: idParam } = req.params;

        try {
            const persona: PersonaI | null = await Persona.findOne({
                where: {
                    id: idParam,
                },
            });
            if (persona != null) {
                res.status(200).json({ persona });
            } else return res.status(300).json({ msg: "El Persona no existe" });
        } catch (error) {
            res.status(500).json({ msg: "Error Internal" });
        }
    }

    public async updatePersona(req: Request, res: Response) {
        const { id: pk } = req.params;

        const {
            id,
            dni,
            nombre,
            apellidos,
            direccion,
            telefono,
            ciudad,
            tipoDePersonas,
        } = req.body;
        try {
            let body: PersonaI = {
                dni,
                nombre,
                apellidos,
                direccion,
                telefono,
                ciudad,
                tipoDePersonas,
            };
            const personaExist: PersonaI | null = await Persona.findByPk(pk);
            // const userExist: UsuarioI | null = await Usuario.findOne(
            //     {
            //         where: { id: pk}
            //     }
            // );

            if (!personaExist)
                return res.status(500).json({ msg: "La Persona No existe" });
            await Persona.update(body, {
                where: { id: pk },
            }); // select update from usuarios where id=pk
        } catch (error) { }
        const persona: PersonaI | null = await Persona.findByPk(pk);
        if (persona) return res.status(200).json({ persona });
    }
    public async deletePersona(req: Request, res: Response) {
        const { id: pk } = req.params;

        try {
            const personaExist: PersonaI | null = await Persona.findByPk(pk);
            if (!personaExist)
                return res.status(500).json({ msg: "La Persona No existe" });
            await Persona.destroy({
                where: { id: pk },
            });
            res.status(200).json({ msg: "Persona Eliminada" });
        } catch (error) { }
    }

}
