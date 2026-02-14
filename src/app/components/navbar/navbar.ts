import { Component } from '@angular/core';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  adminDropdownOpen = signal(false);

  toggleAdminDropdown(): void {
    this.adminDropdownOpen.update(v => !v);
  }

  closeAdminDropdown(): void {
    this.adminDropdownOpen.set(false);
  }
}
