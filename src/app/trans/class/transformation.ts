export class Transformation {
    id: number;
    name: string;
    image: string;
  
    constructor(data: Partial<Transformation>) {
      this.id = data.id || 0;
      this.name = data.name || '';
      this.image = data.image || '';

    }

    getInformation(): string {
      return `${this.id}, ${this.name}, ${this.image}`;
    }
  }
  