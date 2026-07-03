document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE FILTRADO DEL MENÚ ---
    const botonesFiltro = document.querySelectorAll('.btn-filtro');
    const tarjetasProductos = document.querySelectorAll('.tarjeta-producto');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            // Cambiar clase activa en los botones
            botonesFiltro.forEach(b => b.classList.remove('active'));
            boton.classList.add('active');

            const categoriaSeleccionada = boton.getAttribute('data-categoria');

            // Filtrar productos con una transición simple
            tarjetasProductos.forEach(tarjeta => {
                const categoriaTarjeta = tarjeta.getAttribute('data-categoria');
                
                if (categoriaSeleccionada === 'todos' || categoriaTarjeta === categoriaSeleccionada) {
                    tarjeta.style.display = 'block';
                } else {
                    tarjeta.style.display = 'none';
                }
            });
        });
    });

    // --- LÓGICA DEL FORMULARIO DE CONTACTO ---
    const formulario = document.getElementById('formulario-contacto');
    const feedback = document.getElementById('feedback-formulario');

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Evita que la página se refresque

        // Extraer los datos ingresados
        const nombreUsuario = document.getElementById('nombre').value;

        // Simulación de envío exitoso
        feedback.textContent = `¡Gracias, ${nombreUsuario}! Tu mensaje ha sido enviado con éxito. Te prepararemos el café.`;
        feedback.classList.remove('oculto');

        // Limpiar el formulario
        formulario.reset();

        // Desaparecer el mensaje de éxito después de 5 segundos
        setTimeout(() => {
            feedback.classList.add('oculto');
        }, 5000);
    });
});
