document.getElementById('calorieForm').addEventListener('submit', function(e) {
    e.preventDefault();
 
 
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const edad = parseFloat(document.getElementById('edad').value);
 
 
    const tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
 
 
    document.getElementById('resultado').innerText = `Tu Tasa Metabólica Basal es: ${Math.round(tmb)} cal/día`;
 });
 