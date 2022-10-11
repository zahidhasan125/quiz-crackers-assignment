import React, { useContext } from 'react';
import { TopicContext } from '../../layouts/Main';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useContext(TopicContext);

    return (
        <div className='topics-container'>
            <div className="headings">
            <Header></Header>
            </div>
            <div className="m-12 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
            {
                topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
            </div>
            
        </div>
    );
};

export default Topics;