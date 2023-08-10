import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";


@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {

  constructor(public translate: TranslateService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const storedLanguage = localStorage.getItem("LANG_STORAGE_KEY");
        if (storedLanguage) {
            this.translate.use(storedLanguage);
        } else {
            this.translate.setDefaultLang('vi'); // Default language
        }
    // Get the auth token from the service.
    this.translate.use(this.translate.currentLang);
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Accept-Language', this.translate.currentLang)
    });
    console.log(authReq)
    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}