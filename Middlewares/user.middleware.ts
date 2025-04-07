import type { User } from "../Types/model.types";
import type { ErrorNextFunction } from "../Types/modification.types";
import bcrypt from "bcryptjs";

export async function hashPasswordBeforeSaving(
  this: User.UserDoc,
  next: ErrorNextFunction
) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  return next();
}

export function setPasswordChangedAt(this : User.UserDoc , next: ErrorNextFunction) {
    if(this.isModified("password") || !this.isNew) {
        this.passwordChangedAt = new Date(Date.now() - 1000);
    }
    next();
}