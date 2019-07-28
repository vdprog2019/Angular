import { Component} from '@angular/core';

export class User{
    name: string;
    email: string;
    phone: string;
}

@Component({
    selector: 'my-app',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `<div> 
                    <div class="form-group">
                        <label>Имя</label>
                        <input class="form-control" name="name" [(ngModel)]="user.name" #name="ngModel" required />
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" type="email" name="email" [(ngModel)]="user.email" #email="ngModel" 
                            required email />
                    </div>
                    <div class="form-group">
                        <label>Телефон</label>
                        <input class="form-control" name="phone" [(ngModel)]="user.phone" #phone="ngModel" 
                            required pattern="^(\\+)?([()]?\\d[()]?){10,14}$" />
                    </div>
                    <div class="form-group">
                        <button [disabled]="name.invalid || email.invalid || phone.invalid"
                                class="btn btn-default" (click)="addUser()">Регистрация</button>
                    </div>
              </div>`
})
export class AppComponent {

    user: User = new User();
    addUser(){
        console.log(this.user);
    }
}