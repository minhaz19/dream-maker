import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Admin = () => {
    const [info, setInfo] = useState({})

    const handleBlur = (e) => {
        const email = e.target.value;
        setInfo(email);
    }

    const handleSubmit = () => {
        fetch('http://localhost:5000/admin', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ info })
        })
            .then(res => res.json())
            .then(data => {
                alert("Result placed Successfully");
            })
    }
    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add an Admin</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Admin Email</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Enter email" required />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Admin;