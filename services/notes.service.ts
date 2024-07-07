import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private readonly storageKey = 'notes';
  private notes: string[] = [];

  constructor() {
    this.loadNotes();
  }

  private loadNotes(): void {
    const notesJson = localStorage.getItem(this.storageKey);
    if (notesJson) {
      this.notes = JSON.parse(notesJson);
    }
  }

  private saveNotes(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.notes));
  }

  getNotes(): string[] {
    return this.notes;
  }

  addNote(note: string) {
    this.notes.push(note);
    this.saveNotes();
  }

  updateNoteById(id: number, note: string): void {
    if (id >= 0 && id < this.notes.length) {
      this.notes[id] = note;
      this.saveNotes();
    }
  }

  removeNoteById(id: number): void {
    if (id >= 0 && id < this.notes.length) {
      this.notes.splice(id, 1);
      this.saveNotes();
    }
  }
}
