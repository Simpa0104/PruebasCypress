describe('Validación de contenido en la interfaz', () => {
  beforeEach(() => {
    cy.visit('https://getbootstrap.com'); // o la URL de tu app
  });

  it('Debe mostrar el título principal', () => {
    cy.contains('Build fast, responsive sites with Bootstrap');
  });

  it('Debe mostrar el logo con el alt correcto', () => {
    cy.get('img[alt="Bootstrap Icons"]')
  });

  it('Existencia de boton Download', () => {
    cy.get('a[class="link-secondary"]')
      .should('contain.text', 'Download');
  });

  it('Existencia de boton All Releases', () => {
    cy.get('a[class="link-secondary text-nowrap"]')
      .should('contain.text', 'All releases');
  });

  it('Verificación de elementos de navegación (menús, listas)', () => {
    cy.get('nav[class="container-xxl bd-gutter flex-wrap flex-lg-nowrap"]')
      .should('exist');
  });

  it('Validación de un párrafo o sección informativa clave', () => {
    cy.get('p[class="lead fw-normal"]')
      .should('contain.text', 'Jump right into building with Bootstrap—use the CDN, install it via package manager, or download the source code.')
  });
});

// repositorio: https://github.com/Simpa0104/PruebasCypress