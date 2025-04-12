describe('Validación de contenido en la interfaz', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // o la URL de tu app
  });

  it('Validación del título o encabezado principal', () => {
    cy.contains('Bienvenido a la Aplicación de Tareas');
  });

  it('Presencia de una imagen con su atributo alt', () => {
    cy.get('img#logo')
      .should('be.visible')
      .and('have.attr', 'alt', 'Logo de la Aplicación');
  });

  it('Debe tener un botón para agregar tareas', () => {
    cy.get('button[type="submit"]').should('contain.text', 'Agregar');
  });
});