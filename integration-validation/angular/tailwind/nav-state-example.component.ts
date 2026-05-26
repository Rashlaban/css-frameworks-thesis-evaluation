import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-state-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-state-example.component.html'
})
export class NavStateExampleComponent {
  isOpen = false;
  activeTab = 'Dashboard';

  menuItems = ['Dashboard', 'Reports', 'Users', 'Settings'];

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  selectTab(item: string) {
    this.activeTab = item;
    this.isOpen = false;
  }
}
