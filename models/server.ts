import express, { Application } from 'express';

import cors from 'cors';

import userRoutes from '../routes/usuario';



class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '9000';
        
        //Metodso iniciales
        this.middlewares();
        this.routes()

    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lecutura del body
        this.app.use(express.json());

        //carpeta publica
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }
    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Servidor arriba en el puerto: ' + this.port);
            
        })
    }
}


export default Server;