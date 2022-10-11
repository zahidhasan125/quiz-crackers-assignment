import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ question }) => {
    const { options, correctAnswer } = question;

    const handleViewAnswer = answer => {
        toast.info(`Correct Answer: ${answer}`, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div className='pt-10 relative px-6 m-10 border border-slate-400 rounded-3xl bg-slate-300'>
            <h4 className='text-center text-xl font-semibold' dangerouslySetInnerHTML={{ __html: question.question }}></h4>
            <span onClick={() => handleViewAnswer(correctAnswer)} className='absolute right-5 top-10 sm:right-10 sm:top-10 cursor-pointer' title='View Answer'><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></span>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 mx-auto w-50'>
                {
                    options.map(option => <Option key={option} option={option} question={question}></Option>)
                }
            </div>
            <ToastContainer
                position="top-center"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Quiz;