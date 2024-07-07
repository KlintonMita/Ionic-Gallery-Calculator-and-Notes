import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  isDrawerOpened = false;
  notes: string[] = [];

  @ViewChild('main', { static: true }) mainElement!: ElementRef;

  constructor(private notesService: NotesService, private router: Router) {
    this.notes = this.notesService.getNotes();
  }

  toggleDrawer() {
    this.isDrawerOpened = !this.isDrawerOpened;
    const main = this.mainElement.nativeElement as HTMLElement | null;
    if (main) {
      main.style.overflow = this.isDrawerOpened ? 'hidden' : 'auto';
    }
  }

  openNote(note: string, index: number) {
    this.router.navigate(['/note', index]);
  }
}
