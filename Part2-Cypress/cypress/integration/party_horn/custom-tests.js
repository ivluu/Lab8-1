describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  // Check slider and input field
  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');

    cy.get('#volume-slider')
      .then( $el => {
        expect($el).to.have.value(75);
      });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider')
      .invoke('val', 33)
      .trigger('input');

    cy.get('#volume-number')
      .then( $el => {
        expect($el).to.have.value(33);
      });
  });

  it('Volume changes when slider changes', () => {
    cy.get('#volume-slider')
      .invoke('val', 33)
      .trigger('input');

    cy.get('#horn-sound')
      .then( $el => {
        expect($el).to.have.prop('volume', 0.33);
      });
  });

  // Check audio and image for radio
  it('Audio and image is radio when selected', () => {
    cy.get('#radio-air-horn')
      .check();

    cy.get('#horn-sound')
      .then( $el => {
        expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/air-horn.mp3');
      });
    
    cy.get('#sound-image')
      .then( $el => {
        expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/air-horn.svg');
      });
  });

  it('Audio and image is car when selected', () => {
    cy.get('#radio-car-horn')
      .check();

    cy.get('#horn-sound')
      .then( $el => {
        expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/car-horn.mp3');
      });

    cy.get('#sound-image')
      .then( $el => {
        expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/car.svg');
      });
  });

  it('Audio and image is party when selected', () => {
    cy.get('#radio-party-horn')
      .check();

    cy.get('#horn-sound')
      .then( $el => {
        expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3');
      });
    
    cy.get('#sound-image')
      .then( $el => {
        expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg');
      });
  });

  // Check volume image for increasing volume
  it('Volume level-0 when vol = 0', () => {
    cy.get('#volume-number')
      .clear()
      .type('0');

    cy.get('#volume-image')
      .then( $el => {
        expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg');
      });
  });

  it('Volume level-1 when vol > 0', () => {
    cy.get('#volume-number')
      .clear()
      .type('33');

    cy.get('#volume-image')
      .then( $el => {
        expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg');
      });
  });

  it('Volume level-2 when vol > 33', () => {
    cy.get('#volume-number')
      .clear()
      .type('50');

    cy.get('#volume-image')
      .then( $el => {
        expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg');
      });
  });

  it('Volume level-3 when vol > 66', () => {
    cy.get('#volume-number')
      .clear()
      .type('75');

    cy.get('#volume-image')
      .then( $el => {
        expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg');
      });
  });
});
