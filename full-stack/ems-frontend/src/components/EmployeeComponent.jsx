import React, { useState } from 'react'

const EmployeeComponent = () => {

    const [firstName, setfisrtName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')

    function saveEmployee(e){
        e.preventDefault();
        const employee = {firstName, lastName, email};
        console.log(employee);
    }
    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input 
                                type='text' 
                                placeholder='Enter Employee First Name' 
                                name='firstName' 
                                value={firstName} 
                                className='form-control'
                                onChange={(e) => setfisrtName(e.target.value)}>
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input 
                                type='text' 
                                placeholder='Enter Employee Last Name' 
                                name='LastName' 
                                value={lastName} 
                                className='form-control'
                                onChange={(e) => setlastName(e.target.value)}>
                                </input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input 
                                type='text' 
                                placeholder='Enter Employee Email' 
                                name='email' 
                                value={email} 
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)}>
                                </input>
                            </div>

                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent