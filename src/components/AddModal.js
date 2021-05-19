import React, { useState } from 'react'
import Modal from 'react-modal';
const AddModal = () => {


const [modalIsOpen , setModalIsOpen] = useState(false)


const [name , setName] = useState('')

const [story , setStory] = useState('')

const [year, setYear] = useState(null)

const [image , setImage] = useState('')

const [rating , setRating] = useState(0)



    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };



    return (
        <div>
            <button onClick={() => setModalIsOpen(true)}>Add movie</button>
        <Modal
          isOpen={modalIsOpen}
          
          style={customStyles}
          
        >
         <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Name of Movie</label>
    <input type="text" class="form-control"  onChange={(e) => setName(e.target.value)}/>
  
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Story of movie</label>
    <input type="text" class="form-control"   onChange={(e) => setStory(e.target.value)}   />
  
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Year</label>
    <input type="number" class="form-control"   onChange={(e) => setYear(e.target.value)}/>
  
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Poster Url </label>
    <input type="text" class="form-control"    onChange={(e) => setImage(e.target.value)}    />
  
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Rating</label>
    <input type="number" min="1"  max="5" class="form-control"   onChange={(e) => setRating(e.target.value)}/>
  
  </div>





 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>







         
          <button onClick={()=> setModalIsOpen(false)}>close</button>
          
        </Modal>







        </div>
    )
}

export default AddModal
