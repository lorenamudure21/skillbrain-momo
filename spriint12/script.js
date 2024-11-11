async function getAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        
        // Actualizăm numărul de sfaturi și textul sfatului folosind `id` din API
        document.getElementById('advice-number').innerText = `#${data.slip.id}`;
        document.getElementById('advice-text').innerText = `“${data.slip.advice}”`;
    } catch (error) {
        console.error('Error fetching advice:', error);
        document.getElementById('advice-text').innerText = "Failed to fetch advice. Please try again!";
    }
}
