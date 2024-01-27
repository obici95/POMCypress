export class registePage {
  weblocators = {
    firstname: 'input[id="input-firstname"]',
    lastname: 'input[id="input-lastname"]',
    email: 'input[id="input-email"]',
    telephone: 'input[id="input-telephone"]',
    password: 'input[id="input-password"]',
    passwordConfirm: 'input[id="input-confirm"]',
    policyCheckbox: 'input[type="checkbox"]',
    continue: 'input[class="btn btn-primary"]',
  };

  openURL() {
    cy.visit(Cypress.env("URL"));
  }

  enterFirstName(FName) {
    cy.get(this.weblocators.firstname).type(FName, { delay: 0 });
  }

  enterLastName(LName) {
    cy.get(this.weblocators.lastname).type(LName, { delay: 0 });
  }

  enterEmail(email) {
    cy.get(this.weblocators.email).type(email, { delay: 0 });
  }

  enterTelephone(phoneNo) {
    cy.get(this.weblocators.telephone).type(phoneNo, { delay: 0 });
  }

  enterPassword(password) {
    cy.get(this.weblocators.password).type(password, { delay: 0 });
    cy.get(this.weblocators.passwordConfirm).type(password, { delay: 0 });
  }

  selectCheckbox() {
    cy.get(this.weblocators.policyCheckbox).check();
  }

  clickOnContinue() {
    cy.get(this.weblocators.continue).click();
  }
}
