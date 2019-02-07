export class User {
  private _id: number;
  private _title: string;
  private _username: string;
  private _password: string;

  constructor(id: number, title: string, username: string, password: string) {
    this._id = id;
    this._title = title;
    this._username = username;
    this._password = password;
  }

  static fromJson(json: any): User {
    return new User(
      json['id'],
      json['title'],
      json['username'],
      json['password']
    );
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  public toString() {
    return this._title + this._id;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
