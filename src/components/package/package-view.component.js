import React, { useState, useEffect } from 'react';
// import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import Swal from "sweetalert2";
import { useHistory } from 'react-router';
// import { Rating } from 'react-simple-star-rating'

export default function ViewPackage() {
    const [packageId, setPackageId] = useState('');
    const [item, setItem] = useState('');
    const [category, setCategory] = useState('');
    const [specialNotes, setSpecialNotes] = useState('');
    const [acceptedDate, setAcceptedDate] = useState('');
    const [acceptedTime, setAcceptedTime] = useState('');
    const [customerName, setcustomerName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [lostAndFound, setLostAndFound] = useState('');
    const [lostPlace, setLostPlace] = useState('');
    const [lostDate, setLostDate] = useState('');
    const [lostTime, setLostTime] = useState('');
    const [id, setID] = useState(null);
    useEffect(() => {
        console.log("View package is" + localStorage.getItem('PackageId'));
        setID(localStorage.getItem('Id'))
        setPackageId(localStorage.getItem('PackageId'));
        setItem(localStorage.getItem('Item'));
        setCategory(localStorage.getItem('Category'));
        setSpecialNotes(localStorage.getItem('SpecialNotes'));
        setAcceptedDate(localStorage.getItem('AcceptedDate'));
        setAcceptedTime(localStorage.getItem('AcceptedTime'));
        setcustomerName(localStorage.getItem('CustomerName'));
        setAddress(localStorage.getItem('Address'));
        setPhone(localStorage.getItem('Phone'));
        setLostAndFound(localStorage.getItem('LostAndFound'));
        setLostPlace(localStorage.getItem('LostPlace'));
        setLostDate(localStorage.getItem('LostDate'));
        setLostTime(localStorage.getItem('LostTime'));
        console.log("View package id" + setID(localStorage.getItem('Id')));
    }, []);

    // const updateAPIData = () => {

    //     const feedbacks = {
    //         course: course,
    //         student: student,
    //         rating: rating,
    //         feedback: feedback,
    //         response:response
    //     }

    //     console.log(feedbacks);
    //     if(course.length < 3){
    //         Swal.fire({
    //             icon: 'warning',
    //             title: 'Attention',
    //             text: 'Course Name is too short!!',
    //             background: '#fff',
    //             confirmButtonColor: '#eb4034',
    //             confirmButton:true,
    //             iconColor: '#60e004',
    //             closeOnConfirm: true,

    //         })

    //     }else if(student.length < 3){
    //         Swal.fire({
    //             icon: 'warning',
    //             title: 'Attention',
    //             text: 'Student Name is too short!!',
    //             background: '#fff',
    //             confirmButtonColor: '#eb4034',
    //             confirmButton:true,
    //             iconColor: '#60e004',
    //             closeOnConfirm: false,
    //             timer:2800000
    //         })
    //     }else if(rating <= 0 || rating >5){
    //         Swal.fire({
    //             icon: 'warning',
    //             title: 'Attention',
    //             text: 'Invalid Rating Value!!',
    //             background: '#fff',
    //             confirmButtonColor: '#eb4034',
    //             confirmButton:true,
    //             iconColor: '#60e004',
    //             closeOnConfirm: false,
    //             timer:2800000
    //         })
    //     }
    //     else if(feedback.length <= 5){
    //         Swal.fire({
    //             icon: 'warning',
    //             title: 'Attention',
    //             text: 'Feedback can not be shorter than 5 characters!!',
    //             background: '#fff',
    //             confirmButtonColor: '#eb4034',
    //             confirmButton:true,
    //             iconColor: '#60e004',
    //             closeOnConfirm: false,
    //             timer:2800000
    //         })
    //     }else{

    //     axios.put(`http://localhost:5000/feedback/${id}`,feedbacks)
    //     .then(res => {

    //         console.log(res);

    //         if (res.status === 200) {

    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Successful',
    //                 text: 'Feedback has been Updated!!',
    //                 background: '#fff',
    //                 confirmButtonColor: '#333533',
    //                 iconColor: '#60e004'
    //             })               

    //         } else {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Error',
    //                 text: 'Error in updating!',
    //                 background: '#fff',
    //                 confirmButtonColor: '#333533',
    //                 iconColor: '#e00404'
    //             })
    //         }
    //     })
    // }
    // }

    // const handleRating = (rate) => {
    //     setRating(rate)
    //     // Some logic
    // }

    return (
        <div className="flex flex-col px-5 pt-2 ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className='items-center overflow-hidden'>
                        <div className=''>
                            <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                <form className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50' >
                                    <div class="">
                                        <p className='text-4xl font-semibold text-black uppercase'>View Package</p>
                                        <p />
                                        <div className='grid grid-cols-1 gap-4 form-group'><p className='text-2xl font-semibold uppercase text-blue'>Package Details</p></div>
                                        <p />
                                        <div className="grid grid-cols-1 gap-4 form-group">
                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Package ID
                                                </label>
                                                <input type="text"
                                                    required
                                                    readOnly
                                                    className="form-control"
                                                    value={packageId}
                                                    onChange={(e) => setPackageId(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Item
                                                </label>
                                                <input type="text"
                                                    required
                                                    readOnly
                                                    className="form-control"
                                                    value={item}
                                                    onChange={(e) => setItem(e.target.value)}
                                                />
                                            </div>
                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                    Category
                                                </label>
                                                <input type="text"
                                                    required
                                                    readOnly
                                                    className="form-control"
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-1 gap-4 form-group">
                                            <div className="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Special Notes
                                                </label>
                                                <textarea type="text"
                                                    className="form-control"
                                                    readOnly
                                                    value={specialNotes}
                                                    onChange={(e) => setSpecialNotes(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div class="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                    Accepted Date
                                                </label>
                                                <input type="text"
                                                    readOnly
                                                    className="form-control"
                                                    value={acceptedDate.substring(0, 10)}
                                                    onChange={(e) => setAcceptedDate(e.target.value)}
                                                />
                                            </div>
                                            <div className="">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Accepted Time
                                                </label>
                                                <input type="text"
                                                    readOnly
                                                    className="form-control"
                                                    value={acceptedTime}
                                                    onChange={(e) => setAcceptedTime(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p /><p />
                                        <div className='grid grid-cols-1 gap-4 form-group'><p className='text-2xl font-semibold uppercase text-blue'>Customer Details</p></div>
                                        <p />

                                        <div className="grid grid-cols-2 gap-4 form-group">


                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Customer Name
                                                </label>
                                                <input type="text"
                                                    readOnly
                                                    className="form-control"
                                                    value={customerName}
                                                    onChange={(e) => setcustomerName(e.target.value)}
                                                />
                                            </div>
                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                    Delivery Address
                                                </label>
                                                <input type="text"
                                                    readOnly
                                                    className="form-control"
                                                    value={address}
                                                    onChange={(e) => setAddress(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Phone Number
                                                </label>
                                                <input type="text"
                                                    readOnly
                                                    className="form-control"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p /><p />
                                        <div className='grid grid-cols-1 gap-4 form-group'><p className='text-2xl font-semibold uppercase text-blue'>Loast And Found Details</p></div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">

                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Lost And Found
                                                </label>
                                                <input type="text"
                                                    required
                                                    readOnly
                                                    className="form-control"
                                                    value={lostAndFound}
                                                    onChange={(e) => setLostAndFound(e.target.value)}
                                                />
                                            </div>
                                            <div className="">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Lost Place
                                                </label>
                                                <input
                                                    type="text"
                                                    readOnly
                                                    className="form-control"
                                                    value={lostPlace}
                                                    onChange={(e) => setLostPlace(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Lost Date
                                                </label>
                                                <input type="text"
                                                    required
                                                    readOnly
                                                    className="form-control"
                                                    value={lostDate.substring(0, 10)}
                                                    onChange={(e) => setLostDate(e.target.value)}
                                                />
                                            </div>
                                            <div className="">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Lost Time
                                                </label>
                                                <input
                                                    type="text"
                                                    readOnly
                                                    className="form-control"
                                                    value={lostTime}
                                                    onChange={(e) => setLostTime(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Amount
                                                </label>
                                                <input type="number"
                                                    required
                                                    className="form-control"
                                                    value={this.state.amount}
                                                    onChange={this.onChangeamount}
                                                />
                                            </div> */}
                                        {/* <div className="text-center align-middle form-group">
                                                <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Add Order" />
                                            </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}