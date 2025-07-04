document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = form.querySelector('input[name="email"]');
        const email = emailInput.value;

        if (!email || !email.includes('@')) {
            alert("Por favor, insira um e-mail válido.");
            emailInput.focus();
            return;
        }

        // Simulate a successful subscription
        alert(`Obrigado por se inscrever! Novidades serão enviadas para ${email}.`);
        
        form.reset();
    });

    // Add click listeners to product card buttons for demo purposes
    const productButtons = document.querySelectorAll('.product-card .cta-button');
    productButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert("🚧 Este recurso ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀");
        });
    });

});
