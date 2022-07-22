import { Injectable } from "@nestjs/common"

import { name, version, description } from "../../package.json"

@Injectable()
export class AppService {
  getHello(): any {
    return {
      name,
      status: "Running",
      version,
      description,
    }
  }
}
