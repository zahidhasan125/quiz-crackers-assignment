import React, { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, question, count }) => {
    const { correctAnswer } = question;
    const toastId = useRef(null);
    const handleIsTrue = (option) => {
        if (correctAnswer === option) {
            console.log('true')
            count(true);
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success('🦄 Correct!', {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: false,
                    toastId: 1,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }

        }
        else {
            console.log('false')
            count(false);
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.warn('🦄 Incorrect!', {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: false,
                    toastId: 2,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        }
    }

    return (
        <div>
            <div className="flex items-center mb-4 border border-blue-500 cursor-pointer py-2 px-4 rounded-lg hover:bg-slate-400">

                <label htmlFor={option} className="w-full block text-xl font-medium text-gray-900 dark:text-gray-300">
                    <input onClick={() => handleIsTrue(option)} id={option} type="radio" name="option" value="USA" className="mr-2 w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
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