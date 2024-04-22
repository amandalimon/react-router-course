import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from './auth'
import { blogdata } from './Blogdata'
import { BlogForm } from './BlogForm';

function BlogPost() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const blogpost = blogdata.find(post => post.slug === slug);

    const auth = useAuth();
    const user = auth?.user?.username
    const adminList = ['Lenny B.', 'Amanda L.'];
    const colabList = ['tomasa', 'copi', 'avellano']
    const isAdmin = adminList.find(admin => admin === user);
    const isColaborator = colabList.find(colab => colab === user);

    const returnToBlog = () => { navigate('/') };

    return (
        <>
            <h2>{blogpost.title}</h2>
            <section>
                {blogpost.content}
            </section>
            <p>Autor: {blogpost.author}</p>
            <button onClick={returnToBlog}>
                Volver al blog
            </button>

            {isAdmin || isColaborator ? <BlogForm /> : (null)}
        </>
    )
}

export { BlogPost }


