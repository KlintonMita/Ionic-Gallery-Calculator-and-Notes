import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from '../services/notes.service';


@Component({
  selector: 'app-dialog-add-note',
  templateUrl: './dialog-add-note.component.html',
  styleUrls: ['./dialog-add-note.component.scss']
})
export class DialogAddNoteComponent {
  noteForm: FormGroup;

  constructor(private fb: FormBuilder, private notesService: NotesService, private router: Router) {
    this.noteForm = this.fb.group({
      note: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  onSubmit() {
    if (this.noteForm.valid) {
      const note = this.noteForm.value.note;
      this.notesService.addNote(note);
      this.noteForm.reset(); 
      this.router.navigate(['/tabs/tab3']); 
    }
  }
}
