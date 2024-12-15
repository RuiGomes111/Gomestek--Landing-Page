document.addEventListener("DOMContentLoaded", function () { 

    const form = document.getElementById("feedback");
    const confirmacao = document.getElementById("confirmacao");

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Impede o envio padrão do formulário

        const email = document.getElementById("email").value.trim();
        const nome = document.getElementById("nome").value.trim();
        const message = document.getElementById("mensagem").value.trim();

        let isValide = true;
        let errorMessage = "";

        // Validação dos campos
        if (!nome) {
            isValide = false;
            errorMessage += "Nome é obrigatório. \n";
        }

        if (!email) {
            isValide = false;
            errorMessage += "Email é obrigatório. \n";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            isValide = false;
            errorMessage += "Email inválido. \n";
        }

        if (!message) {
            isValide = false;
            errorMessage += "Mensagem é obrigatória. \n";
        }

        // Se a validação falhar, exibe a mensagem de erro
        if (!isValide) {
            alert(errorMessage);
            return;
        }

        // Exibe a mensagem de confirmação
        confirmacao.classList.remove('hidden');

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method || "POST",
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro no envio: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            console.log('Sucesso:', data);
            alert('Mensagem enviada com sucesso!');
            setTimeout(() => {
                confirmacao.classList.add('hidden');
            }, 2000);
            form.reset();
        })
        .catch(error => {
            console.error('Erro ao enviar:', error);
            alert(`Ocorreu um erro ao enviar a mensagem: ${error.message}`);
        });
    });
});
