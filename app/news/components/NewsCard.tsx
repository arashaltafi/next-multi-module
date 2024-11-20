import React from 'react';

interface PropsType {
    name: string
}

const NewsCard = (props: PropsType) => {
    return (
        <div className="p-4 border rounded">
            <p>News: {props.name}</p>
        </div>
    )
}

export default NewsCard