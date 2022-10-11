import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzes = useLoaderData();
    const { data } = quizzes;
    const { name, questions } = data;
    return (
        <div className='mt-12'>
            <h2 className='text-3xl mx-10 py-2 w-100 bg-slate-300 rounded-lg font-bold text-center text-orange-500'>{name}</h2>
            {
                questions.map(question => <Quiz key={question.id} question={question}></Quiz>)
            }
        </div>
    );
};

export default Quizzes;