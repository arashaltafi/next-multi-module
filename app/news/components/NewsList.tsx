import React from 'react';
import NewsCard from './NewsCard';

interface PropsType {
    newses: {
        id: number,
        name: string,
    }[]
}

const NewsList = (props: PropsType) => {
    return (
        <div>
            {props.newses.map(news => (
                <NewsCard key={news.id} name={news.name} />
            ))}
        </div>
    )
}

export default NewsList