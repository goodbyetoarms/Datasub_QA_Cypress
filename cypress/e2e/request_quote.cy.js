describe('Request A Quote form tests', () => {
    beforeEach(() => {
      // Открываем страницу перед каждым тестом
      cy.visit('https://qatest.datasub.com');
      cy.get('h5').contains('Request A Quote').scrollIntoView();
    });
  
    it('Happy Path — корректно заполненные поля', () => {
      cy.get('#name').type('Stallone Silvestr');
      cy.get('#email').type('stallone.silvestr@example.com');
      cy.get('#service').select('B Service');
      cy.get('#purposeBusiness').check();
      cy.get('#withdrawCard').check();
      cy.get('#message').type('Looking forward to your quote.');
      cy.get('button.btn.btn-dark.w-100.py-3').click();
      cy.get('#formStatus').should('be.visible');
    });
  
    it('Negative — email не заполнен', () => {
      cy.get('#name').type('Stallone Silvestr');
      cy.get('#service').select('C Service');
      cy.get('#purposePersonal').check();
      cy.get('#withdrawCard').check();
      cy.get('#message').type('No email provided');
      cy.get('button.btn.btn-dark.w-100.py-3').click();
      cy.get('#email:invalid').should('have.length', 1);
      cy.get('#formStatus').should('not.be.visible');
    });
  
    it('Negative — имя не заполнено', () => {
      cy.get('#email').type('test@example.com');
      cy.get('#service').select('D Service');
      cy.get('#purposeBusiness').check();
      cy.get('#withdrawCash').check();
      cy.get('#withdrawCrypto').check();
      cy.get('#message').type('Forgot to enter name');
      cy.get('button.btn.btn-dark.w-100.py-3').click();
      cy.get('#name:invalid').should('have.length', 1);
      cy.get('#formStatus').should('not.be.visible');
    });
  
    it('Negative — выбраны все чекбоксы оплаты', () => {
      cy.get('#name').type('Anna');
      cy.get('#email').type('anna@example.com');
      cy.get('#service').select('A Service');
      cy.get('#purposePersonal').check();
      cy.get('#withdrawCash').check();
      cy.get('#withdrawCard').check();
      cy.get('#withdrawCrypto').check();
      cy.get('#message').type('Test multiple withdrawal options');
      cy.get('button.btn.btn-dark.w-100.py-3').click();
      // Если запрещено — добавить проверку ошибки:
      // cy.get('.withdrawal-error').should('be.visible');
      cy.get('#formStatus').should('not.be.visible');
    });
  
    it('Negative — не выбран Business/Personal', () => {
      cy.get('#name').type('Mike');
      cy.get('#email').type('mike@example.com');
      cy.get('#service').select('C Service');
      cy.get('#withdrawCard').check();
      cy.get('#message').type('Account purpose not selected');
      cy.get('button.btn.btn-dark.w-100.py-3').click();
      // Предполагаемая ошибка — добавить, если есть:
      // cy.get('.account-purpose-error').should('be.visible');
      cy.get('#formStatus').should('not.be.visible');
    });
  });
  