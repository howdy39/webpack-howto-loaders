class Cat {
  private cats: string[];
  constructor() {
    this.cats = ["tama", "kuro", "tora"];
  }
  public getCats() {
    return this.cats;
  }
}
export = Cat;
