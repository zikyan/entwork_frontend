import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import { getPostByIdOne, editPost } from '../../service/api';
import { toast } from 'react-toastify';

export default function EditPost() {
    const { user }=useSelector((state)=>state.auth)
    const text=useRef()
    const tag=useRef()
    const [selectImage, setSelectImage] = useState('')
    const [categoryVar, setCategoryVar] = useState('Hot')
    const {id}=useParams()
    const [post, setPost] = useState()
    const navigate=useNavigate()

    useEffect(()=>{
        const fetchData = async ()=>{
            const postById = await getPostByIdOne(id)
            setPost(postById)
        }
        fetchData()
      },[])

      const handleOnSubmit = async (e)=>{
        e.preventDefault()
  
          const formData =await  new FormData();
            formData.append('file', selectImage);
            formData.append('upload_preset', 'entwork');
            const options = {
              method: 'POST',
              body: formData,
            };
            const res = await fetch('https://api.Cloudinary.com/v1_1/zikyancloudinary/image/upload', options).then(res=>res.json());
      const postData = {
        text: text.current.value,
        tag: tag.current.value,
        img: res.url,
        category:categoryVar
      };
      await editPost(id,postData);
      toast.success("Post Edited Successfully")
      return navigate(`/profile/${user?.username}`);
    }

  return (
    <div className="login-form">
        <div className="l-form">
            <form className="form" onSubmit={handleOnSubmit}>
                <h1 className="form__title">What's on your mind?</h1>

                <div className="form__div">
                  <input type="text" className='form__input' name="text" ref={text} placeholder={post?.text} />
                </div>

                <div className="form__div">
                  <input type="text" className='form__input' name='tag' ref={tag} placeholder={post?.tag} />
                </div>

                <div style={{marginBottom:'10px'}} className="addpost-category-filter work-filter form__div">
                  <p>Select Category:</p>
                    <select onChange={(e)=>{
                      const selectCategory=e.target.value;
                      setCategoryVar(selectCategory)
                    }}>
                        <option value="Hot">Hot</option>
                        <option value="Trending">Trending</option>
                        <option value="Fresh">Fresh</option>
                        <option value="Top">Top</option>
                        <option value="Random">Random</option>
                    </select>
                </div>

                <div className="form__div">
                  <input type="file" className='form__input' name='file' onChange={(e)=>{setSelectImage(e.target.files[0])}} />
                </div>

                
                <input type="submit" className='form__button' value="Post"/>
            </form>
        </div>
        </div>
  )
}
