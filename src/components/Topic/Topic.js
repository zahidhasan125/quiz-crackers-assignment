import { Button, Card } from 'flowbite-react';
import React from 'react';

const Topic = ({topic}) => {
    const { logo, name, total } = topic;
    return (
        <div className="max-w-sm">
            <Card imgSrc={logo}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Total Quiz: {total}
                </p>
                <Button>View Quiz</Button>
            </Card>
        </div>
    );
};

export default Topic;