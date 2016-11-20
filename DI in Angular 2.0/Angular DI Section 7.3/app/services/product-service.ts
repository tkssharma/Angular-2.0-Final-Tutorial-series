export class Product {
  constructor(public title: string) {}
}

// Initial service implementation

export class ProductService { //<1>
  getProduct(): Product {
    // Code making an HTTP request to get actual product details
    // would go here
    return new Product('iPhone 7');
  }
}
