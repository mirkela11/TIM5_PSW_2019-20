export class ExaminationReport {
  id: number;
  comment: string;

  constructor(id: number, comment: string) {
    this.id = id;
    this.comment = comment;
  }
}
