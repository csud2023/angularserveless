import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomemoduleRoutingModule } from './homemodule-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HomecomponentComponent } from '../../components/home';
import { TasktableComponent } from '../../components/tasktable';
import { DonetasksComponent } from '../../components/donetasks';
import { CreatetaskComponent } from '../../components/createtask';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { BackendbuttComponent, LoginComponent, NewuserComponent } from '../../components';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';






@NgModule({
    declarations: [
        HomecomponentComponent,
        TasktableComponent,
        DonetasksComponent,
        CreatetaskComponent,
        BackendbuttComponent,
        NewuserComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        HomemoduleRoutingModule,
        MatTableModule,
        MatInputModule,
        MatSortModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        MatOptionModule,
        MatSelectModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        NavbarComponent
    ]
})
export class HomemoduleModule {}
