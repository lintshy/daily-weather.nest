import { Controller, Get, Header } from "@nestjs/common"

import { DWHeaders } from "./app.decorator"
import { AppService } from "./app.service"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @DWHeaders()
  get(): string {
    return this.appService.getHello()
  }
}
