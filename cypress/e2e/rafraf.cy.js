/// <reference types="Cypress" />


describe('template spec', () => {
  it('passes', () => {
    // Visit the website
    cy.visit('https://rafraf.com/ar');

    // Get the list of categories
    const categoriesSelector = '.categories li';

    cy.get(categoriesSelector).then((categories) => {
      // Check if there are categories available
      if (categories.length > 0) {
        // Calculate a random index
        const randomIndex = Math.floor(Math.random() * categories.length);

        // Get the random category text
        const randomCategory = Cypress.$(categories[randomIndex]).text().trim();

        // Log the chosen category (optional)
        cy.log(`Chosen Category: ${randomCategory}`);

        // Click on the random category
        cy.get(categoriesSelector).eq(randomIndex).click();
        cy.wait(3000);
        
        
      }
      
      describe('Sign up/sign in', () => {
        cy.get('.justify-between > .font-normal').click();
        cy.wait(3000);
        cy.get('.p-7 > .flex-col > .bg-white').click()
        cy.get('#loginEmail').type("coursesallworld@gmail.com");
        cy.get('#loginPass').type("3R5ebxUUjDMBtrH");
        cy.wait(3000);
        cy.get('.flex-col > .shadow-md').click();
        
        
       });
       
      describe('Searching', () => {
        cy.get('input.px-1.md\\:px-6.w-full').type('فلتر{enter}');
        
        cy.wait(10000);
        cy.get('.whitespace-nowrap > :nth-child(1)').click();
        cy.get('input.px-1.md\\:px-6.w-full').type('محرك');
        
      });
      describe('فورد', () => {
        cy.get('.whitespace-nowrap > :nth-child(6)').click();
        cy.get('.block > .grid').click();
        const categoriesSelector = '.flex.gap-2';

    // Get the list of categories
    cy.get(categoriesSelector).then((categories) => {
      // Check if there are categories available
      if (categories.length > 0) {
        // Calculate a random index
        const randomIndex = Math.floor(Math.random() * categories.length);

        // Get the text of the randomly selected category
        const categoryName = Cypress.$(categories[randomIndex]).find('.pt-2').text().trim();

        // Log the chosen category (optional)
        cy.log(`Chosen Category: ${categoryName}`);

        // Click on the randomly selected category
        cy.get(categoriesSelector).eq(randomIndex).click();
        cy.wait(3000);
        
       // cy.get('#guestEmail').type("coursesallworld@gmail.com");
       // cy.get('#password').type("3R5ebxUUjDMBtrH");
       cy.get('#deliveryFirstName').type("Abu");
       cy.get('#deliveryLastName').type("kareem");
       cy.get('#deliveryStreetAddress').type("street");
       cy.get('#deliveryPhoneNumber').type("+966560064409");
       cy.get(':nth-child(2) > .capitalize > .flex > .my-auto').click();
       cy.get('.css-96oy4g').type("جده");
       cy.get('#react-select-state-react-select-option-0').click()
       cy.wait(1000)
       cy.get(':nth-child(2) > .capitalize > .flex > .my-auto').click()
       cy.get('.grid > .flex > .text-base').click()
       cy.get('#creditCardName').type("tasneem");
       cy.get('#creditCardNumber').type("4444777799996666");
       cy.get('#creditCardMonth').type("09");
       cy.get('#creditCardYear').type("23")
       cy.get('#creditCardCVV').type("999");
       //cy.get('.my-3 > .grid > .shadow-md').click();
       //cy.get('.mx-0').click();
        cy.wait(5000);
        // Add any further actions you want to perform after clicking the category
        // For example, you can navigate to another page or interact with elements on the current page.
        // cy.get('.other-element').click();
      }
    })
   //describe.skip('هواندي', () => {

    //cy.get('ul.flex > .hidden').click();

    //});
 describe('cart', () => {
  cy.get('.mx-0').click();
  cy.wait(1000);
  cy.get('.absolute.cursor-pointer').eq(0).click(); // Click on the first element with the specified class
  cy.wait(2000);
  //cy.get('.absolute.cursor-pointer').eq(1).click(); // Click on the first element with the specified class

 });
 describe('search', () => {
  cy.get('.whitespace-nowrap > :nth-child(1)').click();
  //cy.get('.pt-14 > :nth-child(1) > .md\:flex-row > :nth-child(2) > :nth-child(1) > .css-b62m3t-container > .css-13cymwt-control > .css-hlgwow > .css-96oy4g').type("جمس");
  cy.wait(2000);  
  // Get the total number of brands
    
    
});

      });
    });
  });
});
