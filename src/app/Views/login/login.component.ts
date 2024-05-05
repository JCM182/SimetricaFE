import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { TokenStorageService } from '../../Core/Interceptor/TokenStorageService';
import { Router } from '@angular/router';
import { UserForLoginDTO } from '../../DTOs/UserForLoginDTO';
import { Globals } from '../../Cache/Globals';
import { AuthService } from '../../Services/Auth/auth.service';
import { BasicModule } from '../../Modules/basic/basic.module';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BasicModule],
  providers:[AuthService,TokenStorageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService : AuthService, private tokenStorage: TokenStorageService ,  private _router: Router) {

  }



  Login(user:UserForLoginDTO) {

    console.log('user Data For Login');
    console.log(user);
    // this.loading = this._authService.isProcessing;

    this.authService.Login(user)
    .subscribe(
      (data: any) => {
        console.log(data);

        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);


        // this.reloadPage();
        this._router.navigate(['/Tasks'])

        // localStorage.setItem('token', res.access_token);


        // this._router.navigate(["client/cli"]);
        // this._router.navigate(['Main/Panel']);
        // Swal.fire(
        //   'Bienvenido',
        //   'Te damos la Bienvenida a nuestra nueva APP',
        //   'success'
        // );
      },
      (err) => {


      }
    );
  }


}
