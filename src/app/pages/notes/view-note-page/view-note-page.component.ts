import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';
import { WebServiceService } from 'src/app/services/web-service.service';

@Component({
  selector: 'app-view-note-page',
  templateUrl: './view-note-page.component.html',
  styleUrls: ['./view-note-page.component.scss']
})
export class ViewNotePageComponent implements OnInit {

  myComment :any;
  Note :any;
  Comments  = [];

  constructor(private webService: WebServiceService, public dialogRef: MatDialogRef<ViewNotePageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private commonService:CommonService) {
      console.log(data);
      this.Note = data;
     }

  ngOnInit(): void {
    this.getAllComments();
  }

  getAllComments(){
    this.commonService.setIsBusy();
    this.webService.getAllCommentsByNoteId(this.Note.noteId).subscribe((resp:any) => {
      if(resp != null && resp.Code === 0){
        this.Comments = resp.Data;
        console.log(this.Comments);
      }
      else{

      }
      this.commonService.setIsBusy();
    });
  }

  saveComment(){
    this.commonService.setIsBusy();
    if(this.myComment){
      this.webService.saveComment(this.Note.noteId, this.myComment).subscribe((resp:any) => {
        if(resp != null && resp.Code === 0){
          //this.Comments = resp.Data;
          this.getAllComments();
        }
        else{
  
        }
        this.commonService.setIsBusy();
    });
  }
}
}
