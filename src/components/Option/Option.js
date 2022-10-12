import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, question }) => {
    const handleIsTrue = (option) => {
        if (question.correctAnswer === option) {
            toast.success('🦄 Correct!', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
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
                theme: "dark",
                });
        }
    }

    return (
        <div>
            <div onClick={() => handleIsTrue(option)} className="flex items-center mb-4 border border-blue-500 cursor-pointer py-2 px-4 rounded-lg hover:bg-slate-400">
                
                <label htmlFor={option} className="block text-xl font-medium text-gray-900 dark:text-gray-300">                    
                    <input id={option} type="radio" name="option" value="USA" className="mr-2 w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
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
                theme="dark"
            />
        </div>
    );
};

export default Option;