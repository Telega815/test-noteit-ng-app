import { Pipe, PipeTransform } from '@angular/core';
import {Note} from '../notes/model/note';

@Pipe({
  name: 'noteTextFilter'
})
export class NoteTextFilterPipe implements PipeTransform {

  transform(notes: Note[], text: string): Note[] {
    if (text == null || text === '') {
      return notes;
    } else {
      const lowerText = text.toLowerCase();
      return notes.filter(n => n.title.toLowerCase().includes(lowerText) || n.text.toLowerCase().includes(lowerText));
    }
  }
}
