import { Pom } from "./user-home/pom"

export interface User {
  id: number,
  username: string,
  password: string,
  poms: Pom[],
}
