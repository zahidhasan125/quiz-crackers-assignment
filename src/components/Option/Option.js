import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, question }) => {
    const handleIsTrue = (option) => {
        if (question.correctAnswer === option) {
            // alert('Your Answer is Correct!!!') 
            toast.success('🦄 Correct!', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else {
            toast.warn('🦄 Incorrect!', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    return (
        <div>
            <div className="flex items-center mb-4 border border-blue-500 py-2 px-4 rounded-lg hover:bg-slate-400">
                <input id={option} onClick={() => handleIsTrue(option)} type="radio" name="option" value="USA" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor={option} className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                    {option}
                </label>
            </div>
            <ToastContainer
                position="top-right"
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

export default Option;