import React from 'react';
import './addpost.css';

export default function AddPost() {
  return (
   
    <div className='addpost-parent'>
    <p className='postTitle'><b>What's on your mind?</b></p>
          <div className="addpost-container">
            {/* <div className="addpost-left">
              <div className="addpost-drop-images">
                <p style={{padding:'0',margin:'0'}}>Drop your images here</p>
                
                    
              </div>
              
             
            </div> */}
            <div className="addpost-right">
              <form className='form1'>
                <div className="form-group-1">
                    {/* <input type="text" name='description' onChange={handleChange} />
                    <input type="text" name='userId' onChange={handleChange} />
                    <input type="text" name='tags' onChange={handleChange} /> */}

                    
                    <div className="addpost-2-buttons">
                    <img className="icon1" alt='test' src={require("../../images/back1.png")}></img>
                    <input className='addpost-input' type="text" name='description' placeholder='Give your post a title' />
                      {/* <input className='addpost-input-2' type="text" name='userId' placeholder='User Id' ref={userId} /> */}

                     <input className='addpost-input-2' type="text" name='tags' placeholder='Tags' ></input>
                    </div>

                    <br/>
                    {/*<div className="addpost-select-tags">
                      className="select">Select tags</p>
                      }
                     {/* <button className='btn btn-primary addpost-tags-button'>#sarcastic</button>
                      <button className='btn btn-primary addpost-tags-button'>#depressed</button>
                      <button className='btn btn-primary addpost-tags-button'>#cringe</button>
                      {//<button className='btn btn-primary addpost-tags-button'>#whatsapp</button>}
                       }
                      <br /><br />
                      </div>*/}
                   {/* <div className="addpost-container2">
                   } <img className="icon2" src={require("../../images/img1.png")}></img>
                      //<<ImageIcon style={{color:'#fff', cursor:'pointer'}}/>>
                      }
                      <label className='addpost-choose'><b>
                        Choose image/video</b>
                        <input
                                  className='addpost-file'
                                  type="file"
                                  id="file"
                                  accept=".png,.jpeg,.jpg"
                                  
                                />
                      </label>
                    
                    </div>*/}
                    
                         
                </div>
              
                        <div className='addpost-image-preview-container'>
                          {/* <img className='addpost-image-preview' alt="preview" />
                          <CancelIcon className='addpost-preview-cancel' /> */}
                        </div>
                  
                <button  className='btn btn-success post-button' type='submit'>Post</button>
                
  </form>
            </div>
          </div>
        </div>
        
  )
}