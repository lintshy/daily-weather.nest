import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common"
import { Observable } from "rxjs"
import { tap } from "rxjs/operators"

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(`Before processing => ${context.getClass()} `)
    console.log(context.switchToHttp().getRequest().headerField)
    return next.handle().pipe(
      tap(() => {
        console.log(`After processing => ${context.getClass()} `)
        console.log(Date.now())
      })
    )
  }
}
