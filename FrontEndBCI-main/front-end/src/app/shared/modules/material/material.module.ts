import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports: [
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [
    MatIconRegistry
  ]
})
export class MaterialModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIcon('dollar', sanitizer.bypassSecurityTrustResourceUrl("../assets/img/dollar.svg"));
  }
}
