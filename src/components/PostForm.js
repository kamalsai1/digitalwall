import React, { useState } from 'react';
import './PostForm.css'
import axios from 'axios';

const PostForm = () => {
    const [formData, setFormData] = useState({
        subject: '',
        image: null,
        content: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (event) => {
        setFormData({
            ...formData,
            image: event.target.files[0]
        });
    };

    const handleSubmit = async(event) => {
        // event.preventDefault();
        // const response = await axios.post('http://localhost:3002/upload', formData.image);
        // console.log('Image uploaded:', response.data.imageUrl);
        const postData = {
            'subject': formData.subject,
            'content': formData.content,
            'image': 'http://localhost:3001/images/' + formData.image.name
        }
        // Here you can perform actions like sending the data to the server
        // using fetch or any other method of your choice.
        console.log(formData);
        const res = await axios.post('http://localhost:3001/posts', postData)
    };

    return (
        <div className='header'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="subject">Subject:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                />

                <br />

                <label htmlFor="image">Image Upload:</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                />

                <br />

                <label htmlFor="content">What's on your mind</label>
                <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows="8"
                    cols="50"
                    required
                />

                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostForm;
