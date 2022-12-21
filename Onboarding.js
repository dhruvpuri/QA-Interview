import "cypress-file-upload";

describe("Automation Test 1", () => {

  it("Login", () => 
  {
    cy.visit("https://apply.homage.sg/");})}

    //Filling Details
    cy.contains("Please Select location").click()
    cy.get('Singapore').click();


    //Write Name
    cy.contains("First name").should("exist")
    cy.get('input[placeholder="First Name"]').type("DP");

    cy.contains("Last name").should("exist")
    cy.get('input[placeholder="Last Name"]').type("PD");


    //Email
    cy.contains("Email").should("exist")
    cy.get('input[placeholder="Email Address"]').type("test0000@gmail.com");
    
    //Phone Number
    cy.contains("Phone Number").should("exist")
    cy.get('input[placeholder="43219876"]').type("1234567890");

    //Check Boxes
    cy.contains("Are you of legal age to work in Singapore (17 years and above)?").should("exist")
    cy.get(".cpf-box cpf-btn cpf-r20").click();

    cy.contains("Are you of legal age to work in Singapore (17 years and above)?").should("exist")
    cy.get(".cpf-box cpf-btn").click()

    cy.contains("Do you have professional healthcare experience?").should("exist")
    cy.get(".cpf-box cpf-btn cpf-r20").click()

    cy.contains("Do you have professional healthcare experience?").should("exist")
    cy.get(".cpf-box cpf-btn").click()

  it("Checkmark the accept button", () => {

    //Click Accept
    cy.get(".eisejq").click()
   
  })})
