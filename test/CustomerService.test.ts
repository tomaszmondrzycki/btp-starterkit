import cds from "@sap/cds";

describe(`Customer services testing`, () => {
  const { expect } = cds.test(__dirname + "/..");

  it(`Customers read service API test`, async () => {
    
    const service = await cds.connect.to("CustomerService");

    // ✅ get entity dynamically from service
    const { Customers } = service.entities;

    // ✅ run in privileged context (important)
    const tx = service.tx({ user: new cds.User.Privileged() });

    const customers = await tx.run(SELECT.from(Customers));

    expect(customers)
      .to.eql(await tx.read(Customers))
      .to.eql(await tx.run(SELECT.from(Customers)));

    expect(customers.length).to.be.greaterThan(0);
  });
});

describe("Customers HTTP API test", () => {
  const { expect, GET } = cds.test(__dirname + '/..');

  it("Customer service serves $metadata documents in odata v4", async () => {
    //Arrange

    //Act

    //Assert

  });
});