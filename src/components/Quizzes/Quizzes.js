import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzes = useLoaderData();
    const { data } = quizzes;
    const { name, questions } = data;
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const count = (isTrue) => {
        if (isTrue) {
            setCorrect(correct + 1)
        }
        else {
            setWrong(wrong + 1)
        }
    }
    return (
        <div className='mt-12 relative'>
            <h2 className='text-3xl mx-10 py-2 w-100 bg-slate-300 rounded-lg font-bold text-center text-orange-500'>{name}</h2>
            {
                questions.map(question => <Quiz key={question.id} question={question} count={count}></Quiz>)
            }
            <div className='fixed sm:bottom-40 sm:right-0 right-5 bottom-5 flex justify-center bg-slate-400 p-2 rounded-lg'>
                <div className='border-4 border-green-600 text-center text-green-600 rounded-lg px-4 font-semibold'>
                    <p>Correct</p>
                    <p>{correct/2}</p>
                </div>
                <div className='border-4 border-red-600 text-center text-red-600 rounded-lg px-4 font-semibold'>
                    <p>Wrong</p>
                    <p>{wrong/2}</p>
                </div>
            </div>
        </div>
    );
};

export default Quizzes;