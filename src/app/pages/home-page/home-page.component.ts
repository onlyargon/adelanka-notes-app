import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/app/services/web-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddNotePageComponent } from '../notes/add-note-page/add-note-page.component';
import { ViewNotePageComponent } from '../notes/view-note-page/view-note-page.component';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  noteList = [];
  SearchText : any;
  filteredNotesList = [];
  constructor(private webService: WebServiceService, public dialog: MatDialog, private router: Router, private commonService:CommonService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNotePageComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllNotes();
    });
  }

  getAllNotes(){
    this.commonService.setIsBusy();
    this.webService.getAllNotes().subscribe((resp:any) => {
      if (resp != null && resp.Code == 0) {
        this.noteList = resp.Data;
        this.filteredNotesList = this.noteList;
      } else {
        //this.router.navigate(['home']);
      }
      this.commonService.setIsBusy();
    })
  }

  openNoteView(note){
    const dialogRef = this.dialog.open(ViewNotePageComponent, {
      width: '650px',
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllNotes();
    });
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['auth']);
  }

  searchNotes(){

    var temp = this.noteList.filter(x => x.noteTitle.toLocaleLowerCase().includes(this.SearchText.toLocaleLowerCase()));
    this.filteredNotesList = temp;
  }

}
