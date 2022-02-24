import React from 'react';
import './addpost.css';
import ImageIcon from '@mui/icons-material/Image';

export default function AddPost() {
  return (
    <div className='addpost-parent'>

          <div className="addpost-container">
            {/* <div className="addpost-left">
              <div className="addpost-drop-images">
                <p style={{padding:'0',margin:'0'}}>Drop your images here</p>
                
                    
              </div>
              
             
            </div> */}
            <div className="addpost-right">
              <form>
                <div class="form-group-1">
                    {/* <input type="text" name='description' onChange={handleChange} />
                    <input type="text" name='userId' onChange={handleChange} />
                    <input type="text" name='tags' onChange={handleChange} /> */}

                    <input className='addpost-input' type="text" name='description' placeholder='Give your post a title' />
                    <div className="addpost-2-buttons">
                      {/* <input className='addpost-input-2' type="text" name='userId' placeholder='User Id' ref={userId} /> */}
                      <input className='addpost-input-2' type="text" name='tags' placeholder='Tags' />
                    </div>

                    <br/>
                    <div className="addpost-select-tags">
                      <p>Select tags</p>
                      <button className='btn btn-primary addpost-tags-button'>#sarcastic</button>
                      <button className='btn btn-primary addpost-tags-button'>#depressed</button>
                      <button className='btn btn-primary addpost-tags-button'>#cringe</button>
                      <button className='btn btn-primary addpost-tags-button'>#whatsapp</button>
                      <br /><br />
                    </div>
                    <div className="addpost-container">
                 
                      <ImageIcon style={{color:'#fff', cursor:'pointer'}}/>
                      <label className='addpost-choose'>
                        Choose image/video
                        <input
                                  className='addpost-file'
                                  type="file"
                                  id="file"
                                  accept=".png,.jpeg,.jpg"
                                  
                                />
                      </label>
                    
                    </div>
                    
                         
                </div>
              
                        <div className='addpost-image-preview-container'>
                          {/* <img className='addpost-image-preview' alt="preview" />
                          <CancelIcon className='addpost-preview-cancel' /> */}
                        </div>
                  
                <button style={{backgroundColor:'#32BE7C', margin:'5px 0 20px 28px',width:'100px'}} className='btn btn-success' type='submit'>Post</button>
                
  </form>
            </div>
          </div>
        </div>
  )
}
