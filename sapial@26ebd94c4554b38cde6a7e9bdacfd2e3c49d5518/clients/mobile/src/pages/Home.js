import React from 'react'
import { NewTweet } from '../components/NewTweet';
import '../styles/Main.css';
import { TweetList } from '../components/TweetList';
import {WalletConnector} from '../components/WalletConnector';


export const Home = () => {
    return (
        <>
            <div className="home">
                <h1>DAOHub</h1>
            </div>
            <WalletConnector />
            {/* <NewTweet /> */}
            <div className="tweets">
                <TweetList />
            </div>
        </>
    )
}
