import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { SecureComponent } from './secure.component';
import { RouterModule } from '@angular/router';
console.log('import');
@NgModule({
  declarations: [NavComponent, MenuComponent, SecureComponent],
  imports: [CommonModule, RouterModule],
  exports: [SecureComponent],
})
export class SecureModule {}
