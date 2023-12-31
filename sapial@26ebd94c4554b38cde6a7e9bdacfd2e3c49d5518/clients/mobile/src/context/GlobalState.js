import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer.js';

const initialState = {
    tweets: [
        {
            id: 1,
            user: {
                name: 'Subspace DAO',
                image: '/img/subspace_logo.jpg',
                handle: '@NetworkSubspace'
            },
            tweet: {
                headline: 'Wen Subspace?',
                content: 'Subspace Network drops knowledge bomb including mainnet date and details of the Subspace Foundation a Swiss legal entity responsible for putting protocol governance in the hands of the community. Would you like to know more?',
                image: '/img/subspace_blog.jpg',
                time: '1h',
                comments: '1',
                retweets: '1',
                likes: '10k',
                link: 'https://blog.subspace.network/wen-subspace-network-update-a59669c3649c'
            }
        },
        {
            id: 2,
            user: {
                name: 'Polkadot',
                image: '/img/polkadot_logo.jpg',
                handle: '@Polkadot'
            },
            tweet: {
                headline: '(Discussion) Polkadot Vote #1938 Polkadot Sanctuary - Retroactive Funding',
                content: 'The proposal discusses the contributions of Six and Gabo, Polkadot Ambassadors, in the APAC region from January until the proposal\'s submission and aims to recognize their efforts in initiating and organizing activities within the Polkadot community.',
                image: '',
                time: 'a day ago',
                comments: '1',
                retweets: '3.4k',
                likes: '10k',
                link: 'https://polkadot.polkassembly.io/post/1938'
            }
        },
        {
            id: 3,
            user: {
                name: 'Moonbeam Foundation',
                image: '/img/moonbeam_logo.png',
                handle: '@MoonbeamNetwork'
            },
            tweet: {
                headline: 'Vote #20 Provide correct UnitsPerSecond for ZTG Token',
                content: 'This referendum aims to properly configure UnitsPerSecond for the ZTG asset. The call asset.setUnitsPerSecond within the batch call execution of Referendum #16 contained a wrong MultiLocation (missing GeneralKey). Consequently, the UnitsPerSecond for the ZTG asset was not configured properly.',
                image: '/img/moonbeam_vote_20.png',
                time: '2 days ago',
                comments: '1',
                retweets: '3.4k',
                likes: '10k',
                link: 'https://moonbeam.polkassembly.io/referenda/20'
            }
        },
        {
            id: 4,
            user: {
                name: 'ENS Domains',
                image: '/img/ens_logo.jpg',
                handle: '@ensdomains'
            },
            tweet: {
                headline: '[EP3.7] [Social] Approval of ENS Name Normalization Standard (ENSIP-15)',
                content: 'This is a vote to approve ENSIP-15: Normalization Standard. EP3.7 Motivation: 1) Normalization isn\'t enforced on-chain. 2) There is no code for the DAO to execute. 3) Approval for ENSIP-15 should be confirmed through a social vote.',
                image: '',
                time: '3 days ago',
                comments: '1',
                retweets: '3.4k',
                likes: '10k',
                link: 'https://docs.ens.domains/ens-improvement-proposals/ensip-15-normalization-standard'
            }
        },
        {
            id: 5,
            user: {
                name: 'GnosisDAO ',
                image: '/img/gnosis_logo.jpg',
                handle: '@GnosisDAO'
            },
            tweet: {
                headline: 'GIP-89: Should GnosisDAO support an annual renewal for Blockscout SLA and hosting services?',
                content: 'A proposal for renewing Blockscout\'s hosting services for Gnosis Chain and Chiado testnet from October 1, 2023, to October 1, 2024, covering hosting costs, feature enhancements, and priority support totaling $152,000, to be paid upfront.',
                image: '',
                time: '4 days ago',
                comments: '1',
                retweets: '3.4k',
                likes: '10k',
                link: 'https://snapshot.org/#/gnosis.eth/proposal/0x68d88244f7f1f10d15441a4894ff77ba595dbbed645b2ce0718604b14b96526a'
            }
        },
        {
            id: 6,
            user: {
                name: 'Uniswap Foundation',
                image: '/img/uniswap_logo.jpg',
                handle: '@UniswapFND'
            },
            tweet: {
                headline: '[Temp Check]: Complete initial funding of the UF',
                content: 'The proposal seeks $46.2M in additional funding for the Uniswap Foundation to support its operations and grants for the next two years, following initial funding approval last year. This includes a Temperature Check vote and a subsequent on-chain governance vote, as part of engaging the community and adapting the proposal based on feedback.',
                image: '',
                time: '5 days ago',
                comments: '1',
                retweets: '3.4k',
                likes: '10k',
                link: 'https://gov.uniswap.org/t/temp-check-complete-initial-funding-of-the-uniswap-foundation/22020'
            }
        },
        {
            id: 7,
            user: {
                name: 'The Graph',
                image: '/img/graphprotocol_logo.jpg',
                handle: '@graphprotocol'
            },
            tweet: {
                headline: 'GIP-0013: Reduce Curation Tax',
                content: 'This GIP proposes reducing the curation tax parameter in the protocol from 2.50% to 1.00%. Feedback received after launch of curation is that the cost of the curation tax may be too onerous for some network participants, particularly in instances where the subgraph needs to be upgraded multiple times due to bugs in the subgraph or due to the subgraph being under active development. This proposal significantly reduces the cost for subgraph upgrades.',
                image: '',
                time: '6 days ago',
                comments: '1',
                retweets: '3.4k',
                likes: '10k',
                link: 'https://snapshot.org/#/graphprotocol.eth/proposal/QmRz29aE4TXpi9HrNbn6ZA1sRF1xEBeGbw8HxRpHZRZ4rD'
            }
        },
        {
            id: 8,
            user: {
                name: 'Ethereum Foundation',
                image: '/img/ethereum_logo.svg',
                handle: '@ethereum'
            },
            tweet: {
                headline: 'EIP7523: Empty accounts deprecation',
                content: 'This EIP prohibits the state of any post-merge network from containing empty accounts. Since no empty accounts exist outside the testsuite and no new ones can be created this requirement is already achieved in practice. An explicit ban reduces technical debt going forward.',
                image: '',
                time: '8 days ago',
                comments: '1',
                retweets: '3.4k',
                likes: '10k',
                link: 'https://github.com/ethereum/EIPs/blob/master/EIPS/eip-7523.md'
            }
        },
        {
            id: 9,
            user: {
                name: 'Uniswap Foundation',
                image: '/img/uniswap_logo.jpg',
                handle: '@UniswapFND'
            },
            tweet: {
                headline: 'Deploy Uniswap v3 on Filecoin Virtual Machine (FVM)',
                content: 'The proposal aims to deploy Uniswap v3 on the Filecoin Virtual Machine (FVM) to leverage Filecoin\'s decentralized storage, enhance the decentralized data economy, and further Uniswap\'s multichain vision. By integrating with FVM, Uniswap aims to allow storage providers to swap $FIL tokens, earned as rewards, thus enriching Filecoin\'s data economy.',
                image: '/img/uniswap_detail.jpeg',
                time: '10 days ago',
                comments: '1',
                retweets: '3.4k',
                likes: '10k',
                link: 'https://gov.uniswap.org/t/deploy-uniswap-v3-on-filecoin-virtual-machine-fvm/21309/1'
            }
        }
    ]

}

// create context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = ({ children }) => {
    const [state, dipatch] = useReducer(AppReducer, initialState);

    function getTweet(id) {

        return state.tweets.find(tweet => tweet.id == id);
    }
    function addTweet(tweets) {
        dipatch({
            type: 'ADD_TWEET',
            payload: tweets
        })
    }

    return (<GlobalContext.Provider value={{ tweets: state.tweets, addTweet, getTweet }}>
        {children}
    </GlobalContext.Provider>)
}
