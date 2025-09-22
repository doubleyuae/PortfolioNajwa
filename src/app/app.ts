import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ add this
  imports: [NavbarComponent],  // ✅ import navbar
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
