import { Controller, Get, Header, UseInterceptors } from "@nestjs/common"

import { AppController } from "src/core/app.controller"
import { LoggingInterceptor } from "../core/app.interceptor"
import weatherStaticData from "../../src/__data/weather.json"

@Controller("weather")
@UseInterceptors(LoggingInterceptor)
export class WeatherController extends AppController {
  @Get()
  @Header("test-header", "test value")
  getWeather(): any {
    return weatherStaticData
  }
}
