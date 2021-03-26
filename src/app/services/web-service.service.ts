import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { sha256 } from 'js-sha256';
import { HOME_URL } from '../helpers/appConstants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  signIn(username, password) {

    const url = HOME_URL + 'auth/LoginUser';

    const NetworkStatus1 = btoa(username);
    const NetworkStatus2 = btoa(sha256(password));

    const body = {
      Username: NetworkStatus1,
      Password: NetworkStatus2
    };


    return this.http.post(url, body, httpOptions);
  }

  saveNote(noteTitle, noteContent){

    const url = HOME_URL + 'myNote/CreateNote';
    let val = localStorage.getItem("userId");
    let userId:number = +val;
    var  body = {
      UserId : userId,
      NoteContent : noteContent,
      NoteTitle : noteTitle
    };

    return this.http.post(url, body, httpOptions);
  }

  getAllNotes(){
    const url = HOME_URL + 'myNote/GetAllNotes';
    return this.http.get(url,httpOptions);
  }

  getAllCommentsByNoteId(noteId){
    const url = HOME_URL + 'comment/GetAllCommentForNote';

    var  body = {
      Id : noteId
    };

    return this.http.post(url, body, httpOptions);
  }

  saveComment(noteId, comment){
    const url = HOME_URL + 'comment/CreateComment';

    let val = localStorage.getItem("userId");
    let userId:number = +val;
    var  body = {
      NoteId : noteId,
      UserId : userId,
      CommentContent : comment
    };

    return this.http.post(url, body, httpOptions);
  }

}
