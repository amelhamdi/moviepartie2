
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function Addfilm( {movies,setmovies,Text}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newmovie, setnewmovie] = useState({
        name : "",
        posterurl : "",
        description:"",
        rating: "",

});
const handleAdd =()=>{
     setmovies([...movies,newmovie]);
    };

  return (
<>
<center>
      <Button style={{ display:"flex" , backgroundColor: "grey", borderRadius: "20px", color: "dark", border:"none"}} variant="primary" onClick={handleShow}>
        Add Movie
      </Button>
      </center>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Addfilm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Movie name</Form.Label>
        <Form.Control type="text" placeholder="enter Movie name"  onChange={(e) =>
                  setnewmovie({ ...newmovie, name: e.target.value })
                } 
                />
        <Form.Text className="text-muted"> 
        </Form.Text>
        </Form.Group>
        </Form>
        <Form>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Movie rating</Form.Label>
        <Form.Control type="text" placeholder="enter rating"   onChange={(e) =>
                  setnewmovie({ ...newmovie, rating: e.target.value })} />
        <Form.Text className="text-muted">
          
        </Form.Text>
        </Form.Group>
        </Form>
        <Form>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>picture</Form.Label>
        <Form.Control type="text" placeholder="picture" onChange={(e) =>
                  setnewmovie({ ...newmovie, posterurl: e.target.value })}/>
        <Form.Text className="text-muted">
          
        </Form.Text>
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addfilm