import { Component, OnInit } from '@angular/core';
import { DesktopService } from '../../services/desktop.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-desktop-details',
  templateUrl: './desktop-details.component.html',
  styleUrls: ['./desktop-details.component.css']
})
export class DesktopDetailsComponent implements OnInit {

  currentDesktop = null;
  message = '';

  constructor(
    private desktopService: DesktopService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.message = '';
    this.getDesktop(this.route.snapshot.paramMap.get('id'));
  }

  getDesktop(id): void {
    this.desktopService.get(id)
      .subscribe(
        data => {
          this.currentDesktop = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateWorking(status): void {
    const data = {
      name: this.currentDesktop.name,
      CPU: this.currentDesktop.cpu,
      working: status
    };

    this.desktopService.update(this.currentDesktop.id, data)
      .subscribe(
        response => {
          this.currentDesktop.working = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateDesktop(): void {
    this.desktopService.update(this.currentDesktop.id, this.currentDesktop)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Desktop was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteDesktop(): void {
    this.desktopService.delete(this.currentDesktop.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/desktops']);
        },
        error => {
          console.log(error);
        });
  }

}
