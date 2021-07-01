// shortForm "rafc"

import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank.")
        }
        props.addTodo(title, desc);
    }

    return (
        <div className="container my-3">
            <h3>Add a Todo </h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} class="form-control" id="desc" />
                </div>
                    <button type="submit" class="btn btn-primary">Add Todo</button>
            </form>
        </div>
        )
    }
