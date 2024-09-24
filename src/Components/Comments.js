import React, { useEffect, useState } from 'react'
import { FloatingLabel, Card, Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import useAuth from '../Hooks/useAuth'
import '../App.css'

function Comments() {

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const currentTime = new Date().toLocaleDateString();
    const { user } = useAuth();

    useEffect(() => {
        const storedComments = localStorage.getItem('comments');
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, [])

    const addComments = (e) => {
        e.preventDefault();
        const updateComments = [...comments,
        {
            text: newComment,
            username: user.displayName || user.email,
            date: currentTime
        }]
        setComments(updateComments);
        localStorage.setItem('comments', JSON.stringify(updateComments));
        setNewComment('');
    }


    return (
        <>
            <h5>Yorumlar</h5>
            <Form onSubmit={addComments} className='mb-5 p-2'>
                <div className='comments'>
                    <FloatingLabel controlId="floatingTextarea2" label="Yorumunuz"
                        className='mb-2 align-self-center'>
                        <Form.Control
                            as="textarea"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)} />

                    </FloatingLabel>
                    <Button type='submit' className='d-flex mt-1 mb-3 btn-warning text-white'>
                        Yorum Yap</Button>
                </div>
            </Form>

            <div className='comment-list'>
                <Card className='mb-3'>
                    <Card.Body>
                        <Card.Title className='d-flex justify-content-between bg-white'>
                            <span>John Doe</span>
                            <span className='ms-auto'>06.08.2024</span>
                        </Card.Title>
                        <Card.Text>&gt;Wow. Thats a sounds like a interesting.</Card.Text>
                    </Card.Body>
                </Card>


                {comments.map((comment, index) => (
                    <Card key={index} className='mb-3'>
                        <Card.Body >
                            <div className='d-flex flex-column'>
                                <Card.Title className='d-flex justify-content-between'>
                                    <span>{comment.username}</span>
                                    <span className='ms-auto'>{comment.date}</span>
                                </Card.Title>
                                <Card.Text >&gt;{comment.text} </Card.Text>

                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Comments