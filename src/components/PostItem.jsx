import React from 'react';

const PostItem = (props) => {


    return (
        <div className={"post"}>
            <strong>{props.post.id}. {props.post.title}</strong>
            <div className={"post_content"}>
                {props.post.body}
            </div>
            <div className={"post_btn"}>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;