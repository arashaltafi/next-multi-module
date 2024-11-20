import React from 'react'
import { useNews } from './hooks/useNews'
import NewsList from './components/NewsList'

const NewsPage = async () => {
    const news = await useNews()

    return (
        <div>
            <h1>News</h1>
            <NewsList newses={news} />
        </div>
    )
}

export default NewsPage