import React, { PureComponent, useContext, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { ThemeContext } from './ContextApi';

 

export default function ReachartsWeather() {

  const {temps, setTemps} = useContext(ThemeContext)

 
    return (
      <ResponsiveContainer width="50%" height="50%">
        <LineChart
          width={150}
          height={50}
          data={temps}
          margin={{
            top: 1,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temps" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }

