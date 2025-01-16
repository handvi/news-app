const newsData = async () => {
    const apikey = 'eb716ed8f0304d5ca5afa108b7705d57';
    const api = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`);
    const data = await devicePixelRatio.json();

    const newsContainer = document.getElementById('v');

    newsContainer.innerHTML = '';

    if (data.articles && data.articles.length > 0) {
        data.articles.forEach(article => {
            const articleElement =  document.createElement('div');
            articleElement.classList.add('col-md-4', 'md-4','article');

            articleElement.innerHTML = `
                <div class="card">
                    
                </div>
            `;
        });
    }
}