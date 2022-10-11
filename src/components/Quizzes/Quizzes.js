import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzes = useLoaderData();
    const { data } = quizzes;
    const { name, questions } = data;
    return (
        <div className='mt-12'>
            <h2 className='text-2xl font-bold text-center'>{name}</h2>
            {
                questions.map(question => <Quiz key={question.id} question={question}></Quiz>)
            }
        </div>
    );
};

export default Quizzes;