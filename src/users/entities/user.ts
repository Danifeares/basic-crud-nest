export class User {
  private name: string;
  private email: string;

  constructor(name: string, email: string){
    this.name = name
    this.email = email
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email
  }

  setName(name: string) {
    this.name = name
  }
}