class FormError extends Error {
  public code: number;
  constructor(code: number, message?: string) {
    super(message); // 'Error' breaks prototype chain here
    this.code = code;
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}

export default FormError;
