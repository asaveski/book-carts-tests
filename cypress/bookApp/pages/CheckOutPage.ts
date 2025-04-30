export class CheckOutPage {
  fillName(name: string) {
    cy.get('[formcontrolname="name"]').clear().type(name);
  }

  fillAddressLine1(addressLine1: string) {
    cy.get('[formcontrolname="addressLine1"]').clear().type(addressLine1);
  }

  fillAddressLine2(addressLine2: string) {
    cy.get('[formcontrolname="addressLine2"]').clear().type(addressLine2);
  }

  fillPincode(pincode: string) {
    cy.get('[formcontrolname="pincode"]').clear().type(pincode);
  }

  fillState(state: string) {
    cy.get('[formcontrolname="state"]').clear().type(state);
  }

  placeOrder() {
    cy.contains("button", "Place Order").click();
  }

  cancelOrder() {
    cy.contains("button", "Cancel").click();
  }

  fillShippingForm(shipping: {
    name: string;
    addressLine1: string;
    addressLine2: string;
    pincode: string;
    state: string;
  }) {
    this.fillName(shipping.name);
    this.fillAddressLine1(shipping.addressLine1);
    this.fillAddressLine2(shipping.addressLine2);
    this.fillPincode(shipping.pincode);
    this.fillState(shipping.state);
  }
}
export const checkOutPage = new CheckOutPage();
