import React from 'react';
import '../styles/StatusCard.css';
import { SmallAvatar } from '../images/avatars'
import { TweetCommentIcon, TweetRetweetIcon, TweetLikeIcon, TweetSendIcon } from '../images/svg/svgs';
import { VoteNoIcon, VoteYesIcon } from '../images/images';
import DelayedPopupYes from './DelayedPopupYes';
import DelayedPopupNo from './DelayedPopupNo';

export const StatusCard = ({ tweet }) => {

    return (
        <div className="status-card">
            <div className="left">

                <SmallAvatar width="48" image={tweet.user.image} />
                <div className="pl-1">
                    <div className="status-card-name">{tweet.user.name}</div>
                    <div className="status-card-handle">{tweet.user.handle}</div>
                </div>
            </div>
            <div className="right">
                <div className="status-card-head">


                </div>
                <div className="status-card-body">
                    <div className="status-card-headline">
                        <p className="m-0">{tweet.tweet.headline}</p>
                    </div>
                    <div className="status-card-content">
                        <p className="m-0">{tweet.tweet.content}</p>
                    </div>
                    <div className="status-card-image">
                        <img src={tweet.tweet.image} alt="" />
                    </div>
                    <div className="status-card-footer">                        
                        <div className="flex-align-right" ><DelayedPopupYes /></div>
                        <div className="flex-align-right" ><DelayedPopupNo /></div>
                    </div>
                </div>
            </div>
        </div>
    )

}
