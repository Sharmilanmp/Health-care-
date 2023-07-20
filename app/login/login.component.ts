import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 /* email: any = "";
  password: any = "";*/
username!: string;
password!: string;
  constructor(private router:Router){}
  
  login():void{
    if(this.username==='sharmi' && this.password==='nmp'){
      alert("Login Successfull");
      this.router.navigateByUrl('dashboard');
    }else{
      alert("Login failed");
    }
  }
/*submitForm(form: any): void {
     if (this.email === "com" && this.password === "a") {
      localStorage.setItem('email', this.email);
      const myInteger = 0;
      localStorage.setItem('counter', myInteger.toString());
      alert("Login Successfull");
      this.router.navigateByUrl('/dashboard');
     // Swal.fire('Login Successfully', '', 'success');
    } else {
      //Swal.fire('Invalid User', '', 'warning');
      alert("faild");
    }
  }

   ngOnInit(): void {
    if (localStorage.getItem('email') !== null) {
      this.router.navigateByUrl('/dashboard');
    }
  }*/
}
