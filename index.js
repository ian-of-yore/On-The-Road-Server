const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('News API paoa gece');
});

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const categoryId = req.params.id;
    if (categoryId === '08') {
        res.send(news);
    }
    else {
        const selectedCategory = news.filter(n => n.category_id === categoryId);
        res.send(selectedCategory);
    }
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const newsId = req.params.id;
    const selectedNews = news.find(n => n._id === newsId);
    res.send(selectedNews);
})

app.listen(port, () => {
    console.log(`Eije ei ${port} port e sona jaitece`);
})