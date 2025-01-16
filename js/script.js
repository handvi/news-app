const newsData = async () => {
    const apikey = 'eb716ed8f0304d5ca5afa108b7705d57';
    const api = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`);
    const data = await api.json();

    const newsContainer = document.getElementById('container-news');

    newsContainer.innerHTML = '';

    if (data.articles && data.articles.length > 0) {
        data.articles.forEach(article => {
            const articleElement =  document.createElement('div');
            articleElement.classList.add('col-md-4', 'mb-4','article');

            articleElement.innerHTML = `
                <div class="card">
                    <img src="${article.urlToImage}" class="card-img-top" alt="image"/>
                    <div class="card-body">
                    <h5>${article.title}</h5>
                    <p>${article.description}</p>
                    <a href="${article.url}" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            `;

            newsContainer.appendChild(articleElement);
        });
    } else  {
        console.log('error', error);
    }
};

newsData();