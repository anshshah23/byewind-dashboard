import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Dashboard() {
    const boxes = [
        {
            name: "Customers",
            number: "3,781",
            hike: "+11.01%"
        },
        {
            name: "Orders",
            number: "1,219",
            hike: "-0.03%"
        },
        {
            name: "Revenue",
            number: "$695",
            hike: "+15.03%"
        },
        {
            name: "Growth",
            number: "30.1%",
            hike: "+6.08%"
        }
    ];

    const data = [
        { name: 'Jan', Actual: 18, Projection: 22 },
        { name: 'Feb', Actual: 20, Projection: 25 },
        { name: 'Mar', Actual: 22, Projection: 23 },
        { name: 'Apr', Actual: 24, Projection: 27 },
        { name: 'May', Actual: 15, Projection: 20 },
        { name: 'Jun', Actual: 19, Projection: 23 }
    ];

    const tableData = [
        { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
        { name: 'Marco Lightweight Shirt', price: 128.50, quantity: 37, amount: 4754.50 },
        { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
        { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 },
        { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 },
        { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 },
        { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 }
    ];


    const PieChartdata = [
        { name: 'Direct', value: 300.56 },
        { name: 'Affilliate', value: 135.18 },
        { name: 'Sponsored', value: 154.02 },
        { name: 'E-mail', value: 48.96 },
    ];
    const COLORS = ['#1c1c1c', '#b9edbd', '#b1e3fe', '#95a4fd'];

    return (
        <>
            <div className="flex w-1/2">
                <div className='flex flex-wrap gap-2 w-1/2'>
                    {boxes.map((data, index) => (
                        <div key={index} className="bg-blue-100 py-8 px-6 h-1/3 rounded-lg w-[48%]">
                            <div className="text-md text-black font-bold">{data.name}</div>
                            <div className='mt-2 flex justify-between items-center gap-2'>
                                <span className="text-2xl font-bold">{data.number}</span>
                                <span className={`text-sm flex items-center ${data.hike.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                                    {data.hike} <FaArrowTrendUp className='ml-1' />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right section for the chart */}
                <div className="w-1/2 flex items-center justify-center">
                    <div className="py-6 px-2 rounded-md w-full" style={{ backgroundColor: "#f8f9fb" }}>
                        <h3 className="ml-4 text-start text-black font-bold">Projections vs Actuals</h3>
                        <div className="mt-4" style={{ height: 300 }}> {/* Set a fixed height */}
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Actual" stackId="a" fill="#a8c5da" />
                                    <Bar dataKey="Projection" stackId="a" fill="#cedfe9" radius={[6, 6, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-6 h-[380px] w-1/2 mt-6'>
                <div className='w-[70%] rounded-lg overflow-y-scroll py-6 px-4' style={{ backgroundColor: "#f8f9fb" }}>
                    <div className='font-bold mb-1 ml-3'>Top Selling Products</div>
                    <table className="min-w-full table-auto text-left border-collapse">
                        <thead>
                            <tr style={{ color: "#a9aaac" }} className='text-sm border-b-2 border-[#a9aaac]'>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, index) => (
                                <tr key={index} >
                                    <td className="px-4 py-2">{item.name}</td>
                                    <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                                    <td className="px-4 py-2">{item.quantity}</td>
                                    <td className="px-4 py-2">${item.amount.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='w-[30%] h-full rounded-lg py-6 px-4' style={{ backgroundColor: "#f8f9fb" }}>
                    <div className='font-bold'>Total Sales</div>
                    <ResponsiveContainer width="100%" height={190}>
                        <PieChart>
                            <Pie
                                data={PieChartdata}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {PieChartdata.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    <div>
                        {
                            PieChartdata.map((data, index) => {
                                return (
                                    <div className='flex py-1 justify-between text-center' key={index}>
                                        <div className='flex items-center gap-2'>
                                            {/* Circle with the corresponding color */}
                                            <span
                                                style={{ backgroundColor: COLORS[index], width: '12px', height: '12px', borderRadius: '50%', display: 'inline-block' }}
                                            ></span>
                                            <span>{data.name}</span>
                                        </div>
                                        <span>${data.value}</span>
                                    </div>
                                );
                            })
                        }
                    </div>


                </div>
            </div>

        </>

    );
}
