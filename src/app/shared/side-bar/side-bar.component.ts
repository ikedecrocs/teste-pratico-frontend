import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  sidebarActive = true;

  toggleCollapse() {
    this.sidebarActive = !this.sidebarActive;
  }

}
