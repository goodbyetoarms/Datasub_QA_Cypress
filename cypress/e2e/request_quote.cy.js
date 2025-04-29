describe('Request A Quote Form', () => {
    beforeEach(() => {
      cy.visit('https://qatest.datasub.com/');
    });
  
    it('submits form with valid data', () => {
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.get('input[name="subject"]').type('QA Test');
      cy.get('textarea[name="message"]').type('This is a test message.');
      cy.get('button[type="submit"]').click();
      cy.contains('Thank you').should('be.visible');
    });
  
    it('shows error on empty form submission', () => {
      cy.get('button[type="submit"]').click();
      cy.contains('required').should('be.visible');
    });
  
    it('shows error for invalid email', () => {
      cy.get('input[name="email"]').type('bademail');
      cy.get('button[type="submit"]').click();
      cy.contains('valid email').should('be.visible');
    });
  
    it('prevents double submit', () => {
      cy.get('input[name="name"]').type('Jane');
      cy.get('input[name="email"]').type('jane@example.com');
      cy.get('input[name="subject"]').type('Test');
      cy.get('textarea[name="message"]').type('Double submit check');
      cy.get('button[type="submit"]').click().should('be.disabled');
    });
  
    it('submits with only required fields', () => {
      cy.get('input[name="name"]').type('Test User');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('button[type="submit"]').click();
      cy.contains('Thank you').should('be.visible');
    });
  });
  