import { Component, OnInit } from '@angular/core';
import { DesktopService } from 'src/app/services/desktop.service';

@Component({
  selector: 'app-add-desktop',
  templateUrl: './add-desktop.component.html',
  styleUrls: ['./add-desktop.component.css']
})
export class AddDesktopComponent implements OnInit {
  desktop = {
    name: '',
    cpu: '',
    gpu: '',
    cost: 0,
    yearbuilt: '',
    working: false
  };
  submitted = false;

  constructor(private desktopService: DesktopService) { }

  ngOnInit(): void {
  }

  saveDesktop(): void {
    const data = {
      name: this.desktop.name,
      cpu: this.desktop.cpu,
      gpu: this.desktop.gpu,
      cost: this.desktop.cost,
      yearbuilt: this.desktop.yearbuilt,
    };

    this.desktopService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }

  newDesktop(): void {
    this.submitted = false;
    this.desktop = {
      name: '',
      cpu: '',
      gpu: '',
      cost: 0,
      yearbuilt: '',
      working: false
    };
  }

}
