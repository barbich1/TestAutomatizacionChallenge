import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");

Given("El usuario navega en el sitio web para iniciar su interaccion", () => {
  cy.visit("/");
});

When("Un usuario ingresa el nombre de usuario {string}, la contraseña {string}, y hace clic en el botón de registro", (username,password) => {
  loginPage.clickLogin() 
  loginPage.submitLogin(username,password)
});

When("Un usuario proporciona credenciales incorrectas y hace clic en el botón de inicio de sesión", (table) => {
  loginPage.clickLogin() 
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)

  });
});
Then("El usuario deberia iniciar sesion correctamente", () => {
});
Then("The error message Epic sadface: Username and password do not match any user in this service is displayed", () => {
loginPage.closeModalLogin();
});
When("El usuario da clic en boton Laptop que esta adentro de la categoria", () => {
  loginPage.clickLaptops();
});

Then("El usuario registro un item al carrito", () => {
  loginPage.addLaptop();
  cy.visit("/cart.html");
});