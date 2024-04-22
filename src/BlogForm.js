import React from 'react';
import './BlogForm.css';
import { blogdata } from './Blogdata'

function BlogForm () {
    const onSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Editar título del Blogpost</label>
            <textarea
                type='text'
                id='title'
                defaultValue={blogdata.title}
            />

            <label>Editar contenido</label>
            <textarea
                type='text'
                id='content'
                defaultValue={blogdata.content}
            />

            <button>Cancelar</button>
            <button>Editar</button>
        </form>
    )
}

export {BlogForm}