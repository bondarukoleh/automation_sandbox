describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const userName = $('#username');
        const inputPassword = $('#password');
        const btnSubmit = $('button[type="submit"]');
        const flashAlert = $('#flash');

        await browser.url(`https://the-internet.herokuapp.com/login`)

        await userName.setValue('tomsmith')
        await inputPassword.setValue('SuperSecretPassword!')
        await btnSubmit.click()

        await expect(flashAlert).toHaveTextContaining('You logged into a secure area!');

        await browser.pause(10000)
    });
});


