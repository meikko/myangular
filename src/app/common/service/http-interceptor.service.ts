import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Response} from '../response';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyHttpInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({withCredentials: true});
    return next.handle(authReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const resp = (event as HttpResponse<any>).body as Response;
          if (resp.code === 403) {
            this.router.navigateByUrl('/forbidden');
          }
        }
      })
    );
  }
}
