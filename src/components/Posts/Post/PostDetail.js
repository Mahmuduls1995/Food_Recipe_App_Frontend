import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const PostDetail = () => {
    const { _id } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://afternoon-reef-07616.herokuapp.com/posts/single_post/${_id}`;
        fetch(url)
            .then((response) => response.json())
            .then(data => setPost(data))

    }, [_id])
    console.log(post.title)

    return (
        <Detail>
            <div>
                <img src={post.selectedFile} alt="" />
            </div>
            <Description>
                <h2>Publisher:{post.name}</h2>
                <h3>Title:{post.title}</h3>
                <p>Ingredients:{post.message}</p>
            </Description>
        </Detail>
    );
};

export default PostDetail;


const Detail = styled.div`
    display: flex;
    margin-left:80px;
`;

const Description = styled.div`
width:40%;
margin-left:20px;
`;