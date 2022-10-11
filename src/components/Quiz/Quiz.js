import React from 'react';
import Option from '../Option/Option';

const Quiz = ({ question }) => {
    const { options } = question;
    // console.log(question);
    return (
        <div className='pt-10 px-6 m-10 border border-slate-400 rounded-3xl bg-slate-300'>
            <h4 className='text-center text-xl font-semibold' dangerouslySetInnerHTML={{__html: question.question}}></h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 mx-auto w-50'>
                {
                    options.map(option => <Option key={option} option={option} question={question}></Option>)
                }
            </div>
        </div>
    );
};

export default Quiz;