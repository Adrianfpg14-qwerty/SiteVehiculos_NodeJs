import { PersonaRoutes } from './persona';
import { MultaRoutes } from './multa';
import { VehiculoRoutes } from './vehiculo';

export class Routes {
    public PersonaRoutes: PersonaRoutes = new PersonaRoutes();
    public MultaRoutes: MultaRoutes = new MultaRoutes();
    public VehiculoRoutes: VehiculoRoutes = new VehiculoRoutes();
}
