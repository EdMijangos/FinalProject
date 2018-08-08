import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

//firebase config
const config = {
  apiKey: 'AIzaSyDxnwFJkuCaxqxWCuzrDRK-85F50z8zZw0',
  authDomain: 'hubster-a16d8.firebaseapp.com',
  databaseURL: 'https://hubster-a16d8.firebaseio.com',
  storageBucket: 'hubster-a16d8.appspot.com'
};
firebase.initializeApp(config);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  uploadFile(file){ //el name se pasa para que la imagen sustituya a la anterior y no se ocupe espacio demas en el storage
    const task = firebase.storage().ref('images').child(file.name).put(file)
  
    
    return task.snapshot.ref.getDownloadURL()
      .then(r=>{
        return r
      }).catch(e=>{
    })
  
    //  .then(link=>{
    //   return link
    // })
  }
}
