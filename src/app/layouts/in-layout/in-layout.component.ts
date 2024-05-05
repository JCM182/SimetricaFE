import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-in-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet, MatSidenavModule, MatToolbarModule],
  templateUrl: './in-layout.component.html',
  styleUrl: './in-layout.component.css'
})
export class InLayoutComponent {

}
