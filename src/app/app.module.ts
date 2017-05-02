import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { UserListModule } from './user-list/user-list.module';
import { UserEditModule } from './user-edit/user-edit.module';
import { UserSaveModule } from './user-save/user-save.module';
import { DeleteDialogModule } from './shared/delete-dialog/delete-dialog.module';
import { UpdateSuccessModule } from './shared/update-success/update-success.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    // Custom Modules
    AppRoutingModule,
    UserListModule,
    UserEditModule,
    UserSaveModule,
    DeleteDialogModule,
    UpdateSuccessModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
