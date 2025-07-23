import { Pom } from "./user-home/pom"

export interface User {
  id: number,
  name: string,
  poms: Pom[],
}
