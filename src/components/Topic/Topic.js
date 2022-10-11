import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div className="max-w-sm bg-slate-300 rounded-lg">
            <Card >
                <img className='bg-gray-700 rounded-lg' src={logo} alt="" />
                <div className='flex justify-between items-center'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Total Quiz: {total}
                    </p>
                </div>
                <Button><Link to={`/topic/${id}`}>View Quiz</Link></Button>
            </Card>
        </div>
    );
};

export default Topic;