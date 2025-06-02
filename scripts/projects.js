document.addEventListener("DOMContentLoaded", () => {
    const cards = Array.from(document.querySelectorAll(".project__card"));
    const filters = document.querySelectorAll(".filter");
    const pagSpan = document.querySelector(".projects__pagination span");
    const prevBtn = document.querySelector(".btn-pag:nth-child(1)");
    const nextBtn = document.querySelector(".btn-pag:nth-child(3)");

    let currentCategory = "todos";
    let currentPage = 1;
    const itemsPerPage = 3;

    function updateProjects() {
        let visibleCards = cards;

        if (currentCategory !== "todos") {
            visibleCards = cards.filter(card => card.dataset.category === currentCategory);
        }

        const totalPages = Math.ceil(visibleCards.length / itemsPerPage);

        visibleCards.forEach((card, index) => {
            if (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        // Oculta os não filtrados
        cards.forEach(card => {
            if (!visibleCards.includes(card)) {
                card.style.display = "none";
            }
        });

        pagSpan.textContent = `${currentPage} de ${totalPages}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }

    // Clique em filtro
    filters.forEach(btn => {
        btn.addEventListener("click", () => {
            filters.forEach(f => f.classList.remove("active"));
            btn.classList.add("active");

            currentCategory = btn.textContent.trim().toLowerCase().replace(" ", "");
            currentPage = 1;
            updateProjects();
        });
    });

    // Paginação
    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            updateProjects();
        }
    });

    nextBtn.addEventListener("click", () => {
        const filtered = currentCategory === "todos"
            ? cards
            : cards.filter(card => card.dataset.category === currentCategory);
        const totalPages = Math.ceil(filtered.length / itemsPerPage);

        if (currentPage < totalPages) {
            currentPage++;
            updateProjects();
        }
    });

    updateProjects(); 
});

