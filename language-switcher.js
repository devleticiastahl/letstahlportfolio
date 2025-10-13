// Language Switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    
    if (languageBtn && languageDropdown) {
        // Toggle dropdown
        languageBtn.addEventListener('click', function() {
            languageDropdown.classList.toggle('show');
        });
        
        // Fechar dropdown ao clicar fora
        document.addEventListener('click', function(event) {
            if (!languageBtn.contains(event.target) && !languageDropdown.contains(event.target)) {
                languageDropdown.classList.remove('show');
            }
        });
        
        // Selecionar idioma
        languageOptions.forEach(option => {
            option.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                const link = this.getAttribute('data-link');
                const flag = this.querySelector('.flag-icon').textContent;
                const text = this.textContent.trim();
                
                if (link) {
                    // Redirecionar para a página do idioma selecionado
                    window.location.href = link;
                } else {
                    // Atualizar botão
                    languageBtn.innerHTML = `${flag} ${text} <i class="fas fa-chevron-down" style="margin-left: 5px; font-size: 12px;"></i>`;
                    
                    // Fechar dropdown
                    languageDropdown.classList.remove('show');
                    
                    // Aqui você implementaria a lógica de troca de idioma dinâmica
                    console.log('Idioma selecionado:', lang);
                }
            });
        });
    }
});
