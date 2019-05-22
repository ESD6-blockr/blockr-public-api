export class DataAccessLayerException extends Error {
  public name: string;
  public message: string;
  constructor(name: string, message: string) {
    super(message);
    this.name = name;
    this.message = message;
  }
}
