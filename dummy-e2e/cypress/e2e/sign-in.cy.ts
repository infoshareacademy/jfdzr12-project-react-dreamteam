describe('sign-in page', () => {
	it('should be opened by default', () => {
		cy.visit('/')
	})
	it('should show invalid email error', () => {
		cy.visit('/sign-in')
	})
	it('should show invalid password error', () => {
		cy.visit('/sign-in')
	})
	it('should navigate to /account', () => {
		cy.visit('/sign-in')
	})
})
