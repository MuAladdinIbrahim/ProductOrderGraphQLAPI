import Book from "../books/Book";
import { connect } from "../../../database";

declare global {
  namespace jest {
    interface Matchers<R> {
      isEmptyArrayOrObject(expected: any): CustomMatcherResult;
    }
  }
}

const book = new Book();
beforeEach(() => {
  connect();
});

expect.extend({
  isEmptyArrayOrObject(received) {
    return {
      pass: !received || (!!received.name && !!received.price),
      message: () => `expected null or object and received ${received}`,
    };
  },
});

describe("should return book", () => {
  it("find book by name", async () => {
    const result = await book.findByName("fiction book");
    expect(result.name).toEqual("fiction book");
  });
  it("find book by id", async () => {
    const result = await book.findById("5f5a17c44c19f61f152bcfa6");
    expect(result.id).toEqual("5f5a17c44c19f61f152bcfa6");
  });
  it("booksNamesAndPrices return is array of objects that has name and price properities or empty array", async () => {
    const result = await book.booksNamesAndPrices();
    expect(result[0]).isEmptyArrayOrObject(result[0]);
  });
});
