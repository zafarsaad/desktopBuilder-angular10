import { Component, OnInit } from '@angular/core';
import { DesktopService } from 'src/app/services/desktop.service';

@Component({
  selector: 'app-desktop-list',
  templateUrl: './desktop-list.component.html',
  styleUrls: ['./desktop-list.component.css']
})
export class DesktopListComponent implements OnInit {

  desktops: any;
  currentDesktop = null;
  currentIndex = -1;
  name = '';

  constructor(private desktopService: DesktopService) { }

  ngOnInit(): void {
    this.retrieveDesktops();
  }

  retrieveDesktops(): void {
    this.desktopService.getAll()
      .subscribe(
        data => {
          this.desktops = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  refreshList(): void {
    this.retrieveDesktops();
    this.currentDesktop = null;
    this.currentIndex = -1;
  }

  setActiveDesktop(desktop, index): void {
    this.currentDesktop = desktop;
    this.currentIndex = index;
  }

  removeAllDesktops(): void {
    this.desktopService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveDesktops();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.desktopService.findByName(this.name)
      .subscribe(
        data => {
          this.desktops = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

}
