import React from 'react';
import data from './data/zaid.json';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  } from 'recharts';

const LocalData = () => {
    return (
        <div>
            {
                data.map((item) => {
                    return (
                        <>
                            <h1 key={item.id}>Tag Name -- {item.trends.map((trendss => {
                                return (
                                <li key={trendss._id}>Tag Name -- {trendss.name}</li>
                                )
                            }))}</h1>
                            {/* {console.log(item.trends[0].name)}
                            {console.log(item.trends.map(trend=>{
                                return (
                                <li key={trend._id}>Tag Name -- {trend.name}</li>
                                )
                            }))}
                            {console.log(item)} */}
                            <BarChart width={400} height={400} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey={item.trends.map((trend) => {
                                console.log(typeof(trend.name))
                                return (
                                <p key={trend._id}>{trend.name}</p>
                                )
                            })} />    
                            {/* {item.trends.map((trend)=>{
                                console.log(trend.name)
                                return (
                                    <XAxis dataKey={trend.name}/>
                                )
                            })} */}
                            <YAxis />
                            <Tooltip />
                            {/* <Bar dataKey={item.trends.map((trend) => {
                                return (
                                    <p>{trend.tweet_volume}</p>
                                )
                            })} /> */}
                            {item.trends.map(trend => {
                                console.log(trend.tweet_volume)
                                return (
                                    <Bar dataKey={trend.tweet_volume} fill="#fff"/>
                                )
                            })}
                            </BarChart>
                        </>
                    )
                })
            }
        </div>
    )    
}

export default LocalData;
