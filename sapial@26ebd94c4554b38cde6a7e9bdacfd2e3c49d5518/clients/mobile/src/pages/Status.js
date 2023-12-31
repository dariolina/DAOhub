import React from 'react'

import { StatusCard } from '../components/StatusCard'
import { BackIcon } from '../images/svg/svgs';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Status = ({ match }) => {
    const tweetId = match.params.id;

    const { getTweet } = useContext(GlobalContext)
    return (
        <div>
            <div className="status">
                <Link to="/">
                    <button className="btn p-0">
                        <BackIcon />
                    </button></Link>


                <h1>Discover</h1>
            </div>

            <div className="tweets">
                {/* <p>{JSON.stringify(getTweet(tweetId))}</p> */}
                <StatusCard tweet={getTweet(tweetId)} />
            </div>


            <iframe src="http://localhost:3800/" style={{width: '100%', height: '50vh'}} frameBorder="0"></iframe>
        </div>
    )
}
