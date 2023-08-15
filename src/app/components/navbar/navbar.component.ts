import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DonetasksComponent } from '../donetasks';
import { CreatetaskComponent } from '../createtask';
import { MediaMatcher } from '@angular/cdk/layout';
import { NewuserComponent } from '../newuser';
import { LoginComponent } from '../login';
import { TaskloaderService } from 'src/app/services';
import { MatMenuModule } from '@angular/material/menu';

import { VoltashareService } from 'src/app/services/voltashare.service';
import { CreateobsComponent } from '../createobs';
@Component({
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    CommonModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RouterOutlet,
    MatIconModule,
    MatMenuModule,
   
  ],

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  private adRef = 'KrLXM8n6CvRWM6ln0BqaO1IvBnh2';
  token: string | null = sessionStorage.getItem('');
  switched: boolean = this.token === this.adRef;
  mobileQuery: MediaQueryList;
  name: string | null = sessionStorage.getItem('name');
  prueba = this.pb.downloadExcel('baterias-6166');

  private _mobileQueryListener: () => void;

  constructor(
    public dialog: MatDialog,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private pb: TaskloaderService,
    private v: VoltashareService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 5000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('click', this._mobileQueryListener);
    console.log(this.switched);
  }

  selectVolta(volta:string){
    this.v.cambiarVoltaje(volta)
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DonetasksComponent, {
      width: '500px',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  openDial(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    voltaje: string,
    tipo: string
  ): void {
    this.v.cambiarTipo(tipo)
    this.v.cambiarVoltaje(voltaje)
    this.dialog.open(CreatetaskComponent, {
      width: '500px',
      height: '650px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  openUser(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(NewuserComponent, {
      width: '500px',
      height: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  loginUser(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(LoginComponent, {
      width: '500px',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  createObs(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(CreateobsComponent, {
      width: '500px',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('click', this._mobileQueryListener);
  }
}
