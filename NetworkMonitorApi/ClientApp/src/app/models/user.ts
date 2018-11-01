import { Role } from "./";

export class User {

  id: string;
  email: string;
  password: string;
  token: string;
  roles: Role[];
  avatarImage: Uint8Array;
  firstName: string;
  lastName: string;
}
