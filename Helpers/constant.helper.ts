import { env } from "../newProcess"

export const corsOptions = {
    origin : (origin : string | undefined , callback : (error : Error | null , allow : boolean) => void) => {
        if(origin === env.CLIENT_ORIGIN || !origin){
            callback(null , true);
        }else {
            callback(new Error('Not allowed by CORS'), false);
        }
    } ,
     methods : ['POST' , "GET" , 'PATCH' , 'PUT' , 'DELETE' , 'OPTIONS'] ,
     credentials : true,
     allowedHeaders : ['Content-Type' , 'Authorization'],
     optionsSuccessStatus : 204,
}