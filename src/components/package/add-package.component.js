import React, { useState } from 'react';
// import { Button, Checkbox, Form } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
import axios from 'axios';
import Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
const shortid = require('shortid');

export default function AddPackage() {
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
    const [checkbox, setCheckbox] = useState(false);

    const handleDate = (date) => {
        setAcceptedDate(date)
        // Some logic
    }

    const postData = () => {
        const ShortUniqueId = require('short-unique-id');
        const packageId = shortid.generate();
        const packages = {
            packageId: packageId,
            item: item,
            category: category,
            specialNotes: specialNotes,
            acceptedDate: acceptedDate,
            acceptedTime: acceptedTime,
            customerName: customerName,
            address: address,
            phone: phone,
            lostAndFound: '',
            lostPlace: '',
            lostDate: '',
            lostTime: '',
        }
        console.log(packages);
        axios.post('http://localhost:5000/package/',
            packages,
        ).then(res => {
            console.log(res);
            if (res.status = 200) {
                // this.clearData();
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    text: 'Package has been added!!Your Package ID is' + packageId,
                    background: '#fff',
                    showConfirmButton: true,
                    confirmButtonText: 'Okay',
                    confirmButtonColor: '#333533',
                    iconColor: '#60e004',
                    timer: 2800000
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error in adding!',
                    background: '#fff',
                    confirmButtonColor: '#333533',
                    iconColor: '#e00404',
                    timer: 2800000
                })
            }
        })
    }

    return (
        <div className="flex flex-col px-5 pt-2 ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className='items-center overflow-hidden'>
                        <div className=''>
                            <div class="grid grid-cols-1 gap-4 w-9/12 mx-48  fixed pt-5 px-20">
                                <form className='px-12 py-12 mx-12 border-2 rounded-lg shadow-md bg-gray-50' >
                                    <div class="">
                                        <p className='text-4xl font-semibold text-black uppercase'>Add Package Details</p>

                                        <div className="grid grid-cols-2 gap-4 form-group">


                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Item</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="form-control "
                                                    onChange={(e) => setItem(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Category</label>
                                                <select
                                                    type="text"
                                                    required
                                                    className="form-control"
                                                    onChange={(e) => setCategory(e.target.value)}
                                                >
                                                    <option>Select From Here</option>
                                                    <option>Breakable Items</option>
                                                    <option>Electronics</option>
                                                    <option>Food Items</option>
                                                    <option>Freezer Items</option>
                                                    <option>Flowers</option>
                                                </select>
                                            </div>
                                        </div><p />

                                        <div className="form-group">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Special Notes</label>
                                            <textarea
                                                type="text"
                                                required
                                                className="form-control "
                                                onChange={(e) => setSpecialNotes(e.target.value)}
                                            // Will remove the inline style if applied
                                            />
                                            {/* <p className="validateMsg">{this.state.userContactError}</p> */}
                                        </div><p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >Accepted Date</label>
                                                <DatePicker
                                                    viewBox="0 0 20 40"
                                                    // required
                                                    dateFormat="MMMM d, yyyy"
                                                    // selected={this.state.date}
                                                    selected={new Date()}
                                                    onChange={handleDate}
                                                // onChange={(e) => setAcceptedDate(e.target.value)}
                                                // onChange={(e) => setAcceptedDate(date)}
                                                />
                                                {/* <input type="text"
                                                required
                                                className="form-control "
                                                onChange={(e) => setAcceptedDate(e.target.value)}
                                            /> */}
                                                {/* <p className="validateMsg">{this.state.empIDError}</p> */}
                                            </div>
                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >Accepted Time</label>
                                                <input type="time"
                                                    required
                                                    className="form-control "
                                                    onChange={(e) => setAcceptedTime(e.target.value)}
                                                />
                                                {/* <p className="validateMsg">{this.state.empIDError}</p> */}
                                            </div>
                                        </div><p />

                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >Customer Name</label>
                                                <input type="text"
                                                    required
                                                    className="form-control "
                                                    onChange={(e) => setcustomerName(e.target.value)}
                                                />
                                                {/* <p className="validateMsg">{this.state.empIDError}</p> */}
                                            </div>
                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >Phone Number</label>
                                                <input type="text"
                                                    required
                                                    className="form-control "
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                                {/* <p className="validateMsg">{this.state.empIDError}</p> */}
                                            </div>
                                        </div><p />
                                        <div class="">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >Delivery Address</label>
                                            <input type="text"
                                                required
                                                className="form-control "
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                            {/* <p className="validateMsg">{this.state.empIDError}</p> */}
                                        </div>
                                        <p />

                                        <p />
                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Add Package" onClick={postData} />
                                        </div>
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