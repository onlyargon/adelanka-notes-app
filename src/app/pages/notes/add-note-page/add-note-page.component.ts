import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';
import { WebServiceService } from 'src/app/services/web-service.service';

@Component({
  selector: 'app-add-note-page',
  templateUrl: './add-note-page.component.html',
  styleUrls: ['./add-note-page.component.scss']
})
export class AddNotePageComponent implements OnInit {

  noteTitle: any;
  noteContent: any;

  constructor(private webService: WebServiceService, public dialogRef: MatDialogRef<AddNotePageComponent>, private commonService:CommonService) { }

  ngOnInit(): void {
  }

  saveNote() {
    this.commonService.setIsBusy();
    if (this.noteTitle && this.noteContent) {
      const val = this.webService.saveNote(this.noteTitle, this.noteContent).subscribe((resp: any) => {
        if (resp != null && resp.Code == 0) {
          //this.toastr.warning('Please check your Username / Password and try again');
          this.dialogRef.close();
        } else {
          //this.router.navigate(['home']);
        }
      });
      this.commonService.setIsBusy();
    }
  }

}
