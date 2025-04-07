import { app } from "../App/app";
import { env } from "../newProcess";

process.on("uncaughtException", (error) => {
  console.log("Uncaught Exception: ", error);
  console.log("Shutting down the server due to uncaught exception");
  process.exit(1);
})

const server = app.listen(env.PORT , () => {
    console.log('Listening on port : ' , env.PORT)
});

process.on("unhandledRejection" , (error : Error) => {
    console.log("Unhandled Rejection: ", error);;
    console.log("Shutting down the server due to unhandled rejection");
    server.close(() => {
        console.log("Error name : ", error.name)
        console.log("Stack : " , error.stack);
        process.exit(1);
    })
})