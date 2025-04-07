import { env } from "../newProcess";

export const dbResolver = (dbString: string) => {
  return dbString
    .replace("<username>", env.USERNAME)
    .replace("<password>", env.PASSWORD);
};
