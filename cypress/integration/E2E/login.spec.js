describe('Main Page', function(){
    it('Home Page is getting displayed', function(){
        cy.visit("http://localhost:3000")
        cy.title().should('eq','React Movie Cards')
    })
    it('Play Trailer of EndGame', function(){
        cy.get('.sc-AxirZ').click()
    })
    it('Close Trailer', function(){
        cy.wait(5000)
        cy.get('.modal-video-movie-wrap').click()
    })
    it('Search for a movie', function(){
        cy.get('input[placeholder="Search by Movie Name..."]').type("x")
    })
    it('Check for results', function(){
        cy.contains('No Results Found').should('be.visible')
    })
    it('Search for a movie', function(){
        cy.get('input[placeholder="Search by Movie Name..."]').clear()
        cy.get('input[placeholder="Search by Movie Name..."]').type("ava")
    })
    it('Check for results', function(){
        cy.contains('1 Result Found').should('be.visible')
    })
    it('Click on play button', function(){
        cy.get('.sc-fzoYkl').click()
    })
    it('Close trailer', function(){
        cy.wait(5000)
        cy.get('.modal-video-movie-wrap').click()
    })
})



/*describe('login', () => {
    it('should successfully log into our app', () => {
      cy.login()
        .then((resp) => {
          return resp.body;
        })
        .then((body) => {
          const {access_token, expires_in, id_token} = body;
          const auth0State = {
            nonce: '',
            state: 'some-random-state'
          };
          const callbackUrl = `/callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
          cy.visit(callbackUrl, {
            onBeforeLoad(win) {
              win.document.cookie = 'com.auth0.auth.some-random-state=' + JSON.stringify(auth0State);
            }
          });
        })
    });
  });
  */