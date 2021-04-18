import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            Description: data.Description,
            imageURL: imageURL
        }
        const url = 'https://lit-plains-47991.herokuapp.com/addServices';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'b45f907f35b1ca1ce55ee5bde5053d3e');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(res => setImageURL(res.data.data.display_url))
    }

    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Event</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Event Title:</p>
                    <input className="form-control" name="name" placeholder="Event name" ref={register} />
                    <br />
                    <p>Price:</p>
                    <input className="form-control" name="price" placeholder="Event price" ref={register} />
                    <br />
                    <p>Description:</p>
                    <input className="form-control" name="Description" placeholder="Event description" ref={register} />
                    <br />
                    <input type="file" name="imageFile" onChange={handleImageUpload} />
                    <br/>                   
                    <input className="btn btn-brand text-white mt-3" type="submit" />
                </form>
            </div>
        </section>
    );
};

export default AddService;