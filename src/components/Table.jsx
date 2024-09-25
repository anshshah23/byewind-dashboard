import React, { useState } from 'react';
import { FaSearch, FaFilter, FaSort } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
import { CgSortAz } from "react-icons/cg";
import ReactPaginate from 'react-paginate';

const Table = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const data = [
        { orderId: '#CM9801', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
        { orderId: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
        { orderId: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
        { orderId: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Rejected' },
        { orderId: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
        { orderId: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
        { orderId: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
        { orderId: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
        { orderId: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
        { orderId: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
        { orderId: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
        { orderId: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
        { orderId: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
        { orderId: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
    ];

    const PER_PAGE = 5;
    const offset = currentPage * PER_PAGE;
    const currentPageData = data.slice(offset, offset + PER_PAGE);
    const pageCount = Math.ceil(data.length / PER_PAGE);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'In Progress':
                return 'text-blue-500';
            case 'Complete':
                return 'text-green-500';
            case 'Pending':
                return 'text-[#b1e3fe]';
            case 'Approved':
                return 'text-[#ffe898]';
            case 'Rejected':
                return 'text-gray-500';
            default:
                return '';
        }
    };

    return (
        <div className="p-6 w-full sm:overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">Order List</h2>

            {/* Table Header */}
            <div className="flex items-center justify-between mb-4 rounded-md bg-[#f8f9fb] p-2">
                <div className="flex items-center gap-2">
                    <button className="text-xl rounded-md hover:bg-slate-400 p-2">
                        <FaPlus />
                    </button>
                    <button className="text-xl rounded-md hover:bg-slate-400 p-2">
                        <CgSortAz />
                    </button>
                    <button className="text-xl rounded-md hover:bg-slate-400 p-2">
                        <LuArrowUpDown />
                    </button>
                </div>
                <div className="relative">
                    <FaSearch className="absolute top-3.5 left-2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-8 py-2 border rounded-md w-64"
                    />
                </div>
            </div>

            <table className="w-full text-left">
                <thead>
                    <tr className="border-b" style={{ color: "#a9aaac" }}>
                        <th className="p-2">Order ID</th>
                        <th className="p-2">User</th>
                        <th className="p-2">Project</th>
                        <th className="p-2">Address</th>
                        <th className="p-2">Date</th>
                        <th className="p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPageData.map((item, index) => (
                        <tr key={index} className="border-b rounded-md hover:bg-[#f8f9fb]">
                            <td className="p-2 ">
                                <input type="checkbox"  className='mx-2 text-lg' />
                                {item.orderId}
                            </td>
                            <td className="p-2 flex items-center gap-2">
                                <img
                                    src={`https://i.pravatar.cc/30?img=${index + 1}`}
                                    alt="avatar"
                                    className="w-8 h-8 rounded-full"
                                />
                                {item.user}
                            </td>
                            <td className="p-2">{item.project}</td>
                            <td className="p-2">{item.address}</td>
                            <td className="p-2 flex items-center">
                                <MdOutlineDateRange className="mr-2" />
                                {item.date}
                            </td>

                            <td className={`p-2 ${getStatusClass(item.status)}`}>
                                {item.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <div className="flex justify-end mt-4">
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination flex items-center gap-2'}
                    pageClassName={'p-2 font-bold mx-2 rounded'}
                    previousClassName={'p-2 font-bold rounded'}
                    nextClassName={'p-2 font-bold rounded'}
                    breakClassName={'p-2'}
                    activeClassName={'bg-gray-200'}
                />
            </div>
        </div>
    );
};

export default Table;