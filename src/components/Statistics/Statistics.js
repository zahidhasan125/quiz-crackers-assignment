import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { TopicContext } from '../../layouts/Main';


const Statistics = () => {
    const topics = useContext(TopicContext);
    
    return (
        <div className='flex justify-center items-center'>
            <LineChart width={400} height={300} data={topics} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;