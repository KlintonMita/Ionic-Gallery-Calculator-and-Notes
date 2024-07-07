import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NotesService } from '../services/notes.service';
import { Tab3PageRoutingModule } from '../tab3/tab3-routing.module';

@Component({
  selector: 'app-note-open',
  templateUrl: './note-open.component.html',
  styleUrls: ['./note-open.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class NoteOpenComponent implements OnInit {
  note: string | undefined;
  noteForm: FormGroup;
  noteId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.noteForm = this.fb.group({
      note: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  ngOnInit() {
    const noteId = this.route.snapshot.paramMap.get('id');
    if (noteId !== null) {
      this.noteId = +noteId;
      this.note = this.notesService.getNotes()[this.noteId];
      if (this.note) {
        this.noteForm.setValue({ note: this.note });
      }
    }
  }

  removeNote() {
    if (this.noteId !== null) {
      this.notesService.removeNoteById(this.noteId);
      this.router.navigate(['/tabs/tab3']);
    }
  }

  saveNote() {
    if (this.noteId !== null && this.noteForm.valid) {
      this.notesService.updateNoteById(this.noteId, this.noteForm.value.note);
      this.router.navigate(['/tabs/tab3']);
    }
  }
}
