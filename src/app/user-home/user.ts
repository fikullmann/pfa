import { Pom } from "./pom"

export interface User {
  id: number,
  name: string,
  poms: Pom[],
}
