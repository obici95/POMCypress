import { registePage } from "./pages/registerPage";
const registerObj = new registePage();
import registerData from "../../cypress/fixtures/registerData.json";

describe(" test automation", () => {
  it("register flow", () => {
    registerObj.openURL();
    registerObj.enterFirstName(registerData.firstname);
    registerObj.enterLastName(registerData.firstname);
    registerObj.enterEmail(registerData.email);
    registerObj.enterTelephone(registerData.telephone);
    registerObj.enterPassword(registerData.password);
    registerObj.selectCheckbox();
    registerObj.clickOnContinue();
  });
});
