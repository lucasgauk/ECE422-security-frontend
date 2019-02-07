export class User {
  private _id: number;
  private _username: string;
  private _password: string;

  constructor(id?: number, username?: string, password?: string) {
    this._id = id;
    this._username = username;
    this._password = password;
  }

  static fromJson(json: any): User {
    return new User(
      json['id'],
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
