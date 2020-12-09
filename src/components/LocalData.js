import React from "react";
import data from "./data/zaid";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";
import "./LocalData.css";

// const renderCustomizedLabel = (props) => {
//     const {
//       x, y, width, value,
//     } = props;
//     const radius = 10;
//     console.log(value);
//     return (
//       <g>
//         <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
//         <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
//           {value.name}
//         </text>
//       </g>
//     );
//   };
// const customLabel = () => {
//   return (
//     <g>
//       <foreignObject x={50} y={50} width={100} height={100}>
//         <div>label</div>
//       </foreignObject>
//     </g>
//   );
// };

const LocalData = () => {
  return (
    <>
      <div>
        <BarChart
          layout="vertical"
          width={700}
          height={500}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className="bar-graph"
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis type="number" />
          <YAxis
            dataKey="name"
            width={200}
            interval={0}
            type="category"
            dx={-10}
          />
          <Tooltip />
          <Bar
            radius={[0, 10, 10, 0]}
            dataKey="uv"
            fill="#383838"
            animationDuration={2000}
            animationEasing="linear"
            minPointSize={50}
            barSize={30}
            background={{
              fill: "#03fcc2",
            }}
          >
            <LabelList
              dataKey="name"
              style={{ fill: "white" }}
              position="insideTopLeft"
            />
          </Bar>
        </BarChart>
      </div>
      <div>
        <BarChart
          layout="vertical"
          width={700}
          height={500}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className="bar-graph"
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis type="number" />
          <YAxis
            dataKey="name"
            width={200}
            interval={0}
            type="category"
            dx={-10}
          />
          <Tooltip />
          <Bar
            radius={[0, 10, 10, 0]}
            dataKey="uv"
            fill="#383838"
            minPointSize={50}
            barSize={30}
            background={{
              fill: "#03fcc2",
            }}
          ></Bar>
        </BarChart>
      </div>
      <div>
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className="bar-graph"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            type="category"
            angle="90"
            dx={200}
            padding={{
              left: 10,
              right: 10,
            }}
          />
          <YAxis type="number" />
          <Tooltip />
          <Bar
            dataKey="uv"
            fill="#383838"
            isAnimationActive={false}
            barSize={30}
            minPointSize={50}
            margin={{
              left: 10,
              right: 10,
            }}
            background={{
              fill: "#03fcc2",
            }}
          >
            <LabelList
              dataKey="name"
              angle="270"
              style={{ fill: "white" }}
              className="labellist"
            />
            {/* <LabelList dataKey="uv" angle='90' position='top' /> */}
          </Bar>
        </BarChart>
      </div>
      <div className="bar3">
        <ResponsiveContainer width="70%" height="90%">
          <BarChart
            data={data}
            margin={{
              top: 50,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            className="bar-graph"
          >
            <XAxis
              dataKey="name"
              type="category"
              angle={-20}
              interval={0}
              height={100}
              scaleToFit={false}
              textAnchor="end"
              style={{ fill: "white" }}
              padding={{
                left: 10,
                right: 10,
              }}
            />
            <YAxis type="number" style={{ fill: "white" }} />
            <Tooltip />
            <Bar
              dataKey="uv"
              fill="#383838"
              barSize={30}
              minPointSize={50}
              margin={{
                left: 10,
                right: 10,
              }}
              background={{
                fill: "#03fcc2",
              }}
            >
              {/* <LabelList dataKey="uv" angle='90' position='top' /> */}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
    // <div>
    //     {
    //         data.map((item) => {
    //             return (
    //                 <>
    //                     <h1 key={item.id}>Tag Name -- {item.map((trendss => {
    //                         return (
    //                         <li key={trendss._id}>Tag Name -- {trendss.name}</li>
    //                         )
    //                     }))}</h1>
    //                     {/* {console.log(item.trends[0].name)}
    //                     {console.log(item.trends.map(trend=>{
    //                         return (
    //                         <li key={trend._id}>Tag Name -- {trend.name}</li>
    //                         )
    //                     }))}

    //                     } */}
    //                    {console.log(item)}

    //                     {/* <CartesianGrid strokeDasharray="3 3" /> */}
    //                     {/* <XAxis dataKey={item.trends.map((trend) => {
    //                         console.log(typeof(trend.name))
    //                         return (
    //                         <p key={trend._id}>{trend.name}</p>
    //                         )
    //                     })} />     */}
    //                     {item.trends.map((trend)=>{
    //                         console.log(typeof(trend.name))
    //                         return (
    //                             <XAxis dataKey={trend.name}/>
    //                         )
    //                     })}
    //                     <YAxis />
    //                     <Tooltip />
    //                     {/* <Bar dataKey={item.trends.map((trend) => {
    //                         return (
    //                             <p>{trend.tweet_volume}</p>
    //                         )
    //                     })} /> */}
    //                     {item.trends.map(trend => {
    //                         console.log(typeof(trend.tweet_volume))
    //                         return (
    //                             <Bar dataKey={trend.tweet_volume} fill="#fff"/>
    //                         )
    //                     })}
    //                     </BarChart>
    //                 </>
    //             )
    //         })
    //     }
    // </div>
  );
};

export default LocalData;
