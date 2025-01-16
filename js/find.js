document.getElementById('search-input').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase(); 
    const articles = document.querySelectorAll('.article'); 

    
    articles.forEach(article => {
        const title = article.querySelector('.card-body h5').textContent.toLowerCase(); 
        const description = article.querySelector('.card-body p').textContent.toLowerCase(); 

        
        if (title.includes(query) || description.includes(query)) {
            article.style.display = 'block'; 
        } else {
            article.style.display = 'none'; 
        }
    });
});
