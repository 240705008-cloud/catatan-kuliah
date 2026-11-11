export type Note = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

import { db } from '../db/database';

export function getAll(): Note[] {
  return db.getAllSync<Note>(`SELECT * FROM notes ORDER BY created_at DESC`);
}

export function create(title: string, content: string) {
  db.runSync('INSERT INTO notes (title, content) VALUES (?, ?)', [title, content]);
}

export function update(id: number, title: string, content: string) {
  db.runSync('UPDATE notes SET title = ?, content = ? WHERE id = ?', [title, content, id]);
}

export function remove(id: number) {
  db.runSync('DELETE FROM notes WHERE id = ?', [id]);
}
