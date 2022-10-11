import React, { useContext } from 'react';
import { TopicContext } from '../../layouts/Main';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useContext(TopicContext)
    console.log(topics);
    return (
        <div className='topics-container'>
            <div className="headings">
            <Header></Header>
            </div>
            <div className="topics">
            {
                topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
            </div>
            
        </div>
    );
};

export default Topics;