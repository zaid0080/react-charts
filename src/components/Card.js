import React from 'react'
import data from './data/zaid.json'
import './card.css';

function Card() {
    return (
        <div id="container">
            <ol className='trend-card-list'>
                {data.map(item => {
                    return (
                        <>
                            {console.log(item.trends)}
                            {item.trends.map(trend => {
                                return (
                                <li key={trend._id}>{trend.name}<p>{trend.tweet_volume}</p></li>
                                )
                            })}
                        </>
                    )
                })}
            </ol>
            <ol className='trend-card-list'>
                {data.map(item => {
                    return (
                        <>
                            {console.log(item.trends)}
                            {item.trends.map(trend => {
                                return (
                                <li key={trend._id}>{trend.name}<p>{trend.tweet_volume}</p></li>
                                )
                            })}
                        </>
                    )
                })}
            </ol>
        </div>
    )
}

export default Card
