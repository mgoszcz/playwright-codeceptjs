Feature('Zero bank application - e2e tests')

Before(({ I }) => {
  console.log('Before hook')
  I.amOnPage('http://zero.webappsecurity.com/index.html')
})

After(({ I }) => {
  console.log('After hook')
})

Scenario('Login test - negative', ({ I }) => {
    I.click('#signin_button')
    LoginPage.assertLoginFormIsVisible()
    LoginPage.submitLogin('invalid', 'invalid')
    I.seeElement('.alert-error')
})