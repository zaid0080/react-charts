import React, { useState, useEffect } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

function ApiCall() { 
    const gitUrl = 'http://jsonplaceholder.typicode.com/users';
    const [userData, setUserData] = useState({});
    useEffect(() => {
        getGibhubUrl();
    }, [])
    const getGibhubUrl = async() => {
        const response = await fetch(gitUrl);
        const jsonData = await response.json();
        setUserData(jsonData);
    }
    return (
        <div>
            {/* <h2>User Data</h2>
            {console.log(userData)}
            {
                [userData].map((item) => {
                    return (
                    <li key={item.id}>
                        <h1>{item.login}</h1>
                        <h2>Url -- {item.url}</h2>
                    </li>
                    )
                })
            } */}
            <h1>Bar Charts</h1>
            <BarChart width={400} height={400} data={userData} margin={{
            top: 5, right: 30, left: 20, bottom: 5,}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='id'/>
            <YAxis />
            <Tooltip />
            <Bar dataKey="geo.lng" fill="#000"/>
            <Legend />
            </BarChart>
        </div>
    )
}

export default ApiCall
