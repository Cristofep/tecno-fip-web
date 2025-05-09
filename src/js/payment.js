const usuarioId = localStorage.getItem("usuario_id");

if (!usuarioId) {
  window.location.href = "/auth/register";
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('payment-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const metodoPagoSeleccionado = document.querySelector('input[name="metodo_pago"]:checked');
    
    if (metodoPagoSeleccionado) {
      const metodoPago = metodoPagoSeleccionado.value;
      const id = form.dataset.id;

      if (id) {
        window.location.href = `/Servicios/Compra/${metodoPago}?id=${id}`;
      } else {
        alert("No se pudo obtener el ID del servicio.");
      }
    } else {
      alert("Por favor, selecciona un método de pago.");
    }
  });
});


