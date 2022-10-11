import React from 'react';

const Option = ({ option, question }) => {
    const handleIsTrue = (option) => {
        if (question.correctAnswer === option) {
            alert('Your Answer is Correct!!!')            
        }
    }
    
    return (
        <div>
            <div className="flex items-center mb-4 border border-blue-500 py-2 px-4 rounded-lg">
                <input id={option} onClick={() => handleIsTrue(option)} type="radio" name="option" value="USA" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor={option} className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                    {option}
                </label>                
            </div>
        </div>
    );
};

export default Option;