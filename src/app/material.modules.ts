import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

import { NgModule } from '@angular/core';


@NgModule({
    imports:[
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatChipsModule
    ],
    exports:[
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatChipsModule

    ]
})
export class MaterialModules{}