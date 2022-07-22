import { applyDecorators, Header, UseInterceptors } from "@nestjs/common"

import { LoggingInterceptor } from "./app.interceptor"

export function DWPreset() {
  return applyDecorators(
    Header("test-header", "test-value"),
    UseInterceptors(LoggingInterceptor)
  )
}
