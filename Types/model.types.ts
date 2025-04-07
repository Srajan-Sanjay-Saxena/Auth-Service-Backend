import type { HydratedDocument, InferSchemaType } from "mongoose";
import type { userSchema } from "../Models/user.model";
import type { ErrorNextFunction } from "./modification.types";
import type { Request, Response, NextFunction } from "express";

export type MethodBase = Record<string, (...args: any[]) => any>;
export type VirtualBase = Record<string, any>;

export namespace User {
  export type UserSchemaMethods = {
    hashPasswordBeforeSaving: (next: ErrorNextFunction) => Promise<void>;
    setPasswordChangedAt: (next: ErrorNextFunction) => void;
  }

  export type UserSchemaType = InferSchemaType<typeof userSchema>;
  export type UserDoc = HydratedDocument<UserSchemaType, UserSchemaMethods>;
}

type AsyncHandler = (req: Request, res: Response, next: NextFunction) => void;
