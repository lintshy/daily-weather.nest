import { Controller, Get, Header } from "@nestjs/common"

import { DWPreset } from "./app.decorator"
import { AppService } from "./app.service"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @DWPreset()
  get(): string {
    return this.appService.getHello()
  }
}
