import { Role } from "./role";

export class User {

  id: string;
  email: string;
  password: string;
  token: string;
  roles: Role[];
}
