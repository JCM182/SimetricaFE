import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-out-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet, MatSidenavModule, MatToolbarModule],
  templateUrl: './out-layout.component.html',
  styleUrl: './out-layout.component.css'
})
export class OutLayoutComponent {

}
