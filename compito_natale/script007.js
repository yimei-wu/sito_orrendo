function showCategory(event, category) {
    // evita che torni in cima alla pagina
    event.preventDefault();

    // nasconde tutte le categorie
    let categories = document.querySelectorAll('.gallery');
    categories.forEach(function (category) {
        category.style.display = 'none';
    });

    // mostra la categoria specifica
    let selectedCategory = document.getElementById(category);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}

// mostra la categoria "auto" all'avvio
showCategory('auto');
