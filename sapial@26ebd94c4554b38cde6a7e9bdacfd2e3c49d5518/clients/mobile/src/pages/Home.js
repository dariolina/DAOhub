import React from 'react'
import { NewTweet } from '../components/NewTweet';
import '../styles/Main.css';
import { TweetList } from '../components/TweetList';
import {WalletConnector} from '../components/WalletConnector';


export const Home = () => {
    return (
        <>
            <div className="home">
                <img src="/logo192.png" height="25px" alt="DAOhub" />
                <mainTitle>DAOhub</mainTitle>
            </div>
            <WalletConnector />
            {/* <NewTweet /> */}
            <div className="tweets">
                <TweetList />
            </div>
        </>
    )
}
