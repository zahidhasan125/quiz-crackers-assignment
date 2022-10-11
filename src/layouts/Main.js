import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

export const TopicContext = createContext([])

const Main = () => {
    const topics = useLoaderData()
    return (
        <TopicContext.Provider value={topics.data}>
            <div>
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
        </TopicContext.Provider>
    );
};

export default Main;