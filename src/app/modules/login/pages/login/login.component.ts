import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { KeyService } from 'src/app/core/services/key.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public value: string = '';

  constructor(
    public cookieService: CookieService,
    public router: Router,
    public keyService: KeyService
  ) {}

  public onSubmit() {
    this.cookieService.set('key-encryption-pass', this.value);
    this.keyService.init();
    this.router.navigate(['/chat/talk']);
  }

  public onInput(e: any) {
    if (e.key == 'Enter') {
      this.onSubmit();
    }
  }
}
