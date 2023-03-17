import React from 'react';

const PostItem = () => {
    return (
        <div className={"post"}>
            <div className={"post_content"}>
                Some info
            </div>
            <div className={"post_btn"}>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;