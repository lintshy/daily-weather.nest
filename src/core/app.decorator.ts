import { applyDecorators, Header } from "@nestjs/common"

export function DWHeaders() {
  return applyDecorators(Header("test-header", "test-value"))
}
