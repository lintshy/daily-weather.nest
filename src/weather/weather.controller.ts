import { Controller, Get } from "@nestjs/common"

import { AppController } from "src/core/app.controller"
import weatherStaticData from "../../src/__data/weather.json"
import { DWPreset } from "../core/app.decorator"

@Controller("weather")
export class WeatherController extends AppController {
  @Get()
  @DWPreset()
  getWeather(): any {
    return weatherStaticData
  }
}
