function generatePDF() {
    // Obtener los datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const issue = document.getElementById('issue').value;
    const details = document.getElementById('details').value;

    // Inicializar jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Agregar contenido al PDF
    doc.setFontSize(20);
    doc.text("Ticket de Soporte", 20, 20);

    doc.setFontSize(12);
    doc.text(`Nombre: ${name}`, 20, 40);
    doc.text(`Correo electrónico: ${email}`, 20, 50);
    doc.text(`Asunto: ${issue}`, 20, 60);
    doc.text(`Detalles: ${details}`, 20, 70);

    // Guardar el PDF
    doc.save('ticket_soporte.pdf');
}
