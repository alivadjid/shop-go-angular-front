import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PublicComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [PublicComponent],
})
export class PublicModule {}
