describe('Pruebas de navegación con Cypress - DemoQA', () => {
  beforeEach(() => {
    cy.visit('https://web.dev/?hl=es-419');
  });

  it('Validación de un titulo principal', () => {
    cy.get('h3[id="juntos-creamos-una-web-mejor"]')
  });

  it('Debe mostrar una imagen principal con el alt correcto', () => {
    cy.get('img[loading="lazy"]')
  });

  it('Existencia de boton Switch to English', () => {
    cy.get('button[type="button"]')
  });

  it('Verificación de elementos de navegación (menús, listas)', () => {
    cy.get('nav[class="devsite-tabs-wrapper"]')
      .should('exist');
  });

  it('Validación de un párrafo o sección informativa clave', () => {
    cy.get('div[class="devsite-landing-row-item-description-content"]')
      .should('contain.text', 'Queremos ayudarte a crear sitios web atractivos, accesibles, rápidos y seguros que funcionen en todos los navegadores y para todos tus usuarios. Este sitio es nuestra plataforma de contenido para ayudarte en ese recorrido, escrito por miembros del equipo de Chrome y expertos externos que se especializan en temas de desarrollo web, como accesibilidad, rendimiento, diseño y mucho más.')
  });
});
