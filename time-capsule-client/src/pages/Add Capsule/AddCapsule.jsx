import React from 'react'
import './AddCapsule.css'
import Button from '../../components/shared/Button/Button'

const AddCapsule = () => {
  return (
    <div className='add-capsule'>
      <form>
        <h1>Create New Capsule</h1>
        <div className="add-capsule-inputs">

          <div className="add-label-input">
            <label htmlFor="title">Title</label>
            <input type="text" name='title' placeholder='e.g 10 years later' />
          </div>

          <div className="add-label-input">
            <label htmlFor="image">Image</label>
            <input type="file" name='image' accept='image/*'/>
          </div>

          <div className="add-label-input">
            <label htmlFor="audio">Audio</label>
            <input type="file" name='audio' accept='audio/*'/>
          </div>

          <div className="add-label-input">
            <label htmlFor="color">Color</label>
            <input type="color" name='color' />
          </div>

          <div className="add-label-input">
            <label htmlFor="title">Emoji</label>
            <input type="text" name='emoji' placeholder='e.g. 😊' />
          </div>
          <div className="add-label-input">
            <label htmlFor="title">Reveal Date</label>
            <input type="date" name='revealDate' />
          </div>
          <div className="add-label-input">
            <label htmlFor="title">Type</label>
            <select name='type'>
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="unlisted">Unlisted</option>
            </select>
          </div>
          <div className="add-label-input">
            <label htmlFor="tags">Tags</label>
            <input type="text" name='tags' placeholder='e.g happy, sad' />
          </div>
  
        <div className="add-label-check">
            <label htmlFor="isSurprise">isSurprise</label>
            <input type="checkbox" name='isSurprise' />
          </div>
        </div>
        <div className="add-label-input">
            <label htmlFor="message">Message</label>
            <textarea type="text" name='message' placeholder='e.g enter your message ...' />
          </div>
          <Button text={"Create"}/>
      </form>
    </div>
  )
}

export default AddCapsule