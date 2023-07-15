import { useEffect, useState } from 'react';
import './App.css';
import {storage} from './firebase.config'
import {ref,uploadBytes,getDownloadURL,listAll} from 'firebase/storage';
import Loading from './component/Loadings/Loading';


function App() {
  const[file,setFile]=useState(null);
  const[isLoad,setIsLoad]=useState(false);
  const[images,setImages]=useState([]);
 
  //console.log("🚀 ~ file: App.js:8 ~ App ~ file:", file)
   async function uploadFileToStorage() {//fuction de upload file len storage
    if (!file) {//neu file la null thi khong lam gi het 
      //console.log('file dang null');
      return
    }
    if (isLoad) {
      console.log('Dữ liệu đã được tải lên')
      return  
    }
    // const imagesListRef=ref(storage,'images/');//thu muc images
    const fileRef = ref(storage,'images/'+file.name);//chuyen file thanh dang co the up len firebase
    //console.log("🚀 ~ file: App.js:15 ~ uploadFileToStorage ~ fileRef:", fileRef)
     setIsLoad(true)
     //
    await uploadBytes(fileRef,file).then(res=>{
      //console.log("🚀 ~ res: ", res);
      getDownloadURL(res.ref).then(url=>{
      console.log("gh",url);
      setImages([...images,{id:Date.now(),urlLink:url}])
      })
    }).catch(er=>{
      console.log("er",er);
    })
    setIsLoad(false)
    
    
  }

  async function getAllImages() {
    if (isLoad) {
      console.log('Dữ liệu đã được tải lên')
      return
      
    }
   const listRef=ref(storage,'images');
   setIsLoad(true)
   await listAll(listRef).then(async(res)=>{
    let abc=[];
    for (let i in res.items) {
      let imageObj={
        id: Date.now(),
        urlLink:'',
      }
      await getDownloadURL(res.items[i]).then(url=>{
        imageObj.urlLink=url;
      })
      abc.push(imageObj)
    }
     
    console.log("🚀 ~ file: App.js:52 ~ awaitlistAll ~ res.items:", abc)
    setImages(abc)
   })
   setIsLoad(false) 
  }
  useEffect(()=>{
    //console.log("jkjl2",images);
  },[images])
  return (
    <div style={{textAlign:'center'}}>
      {
        isLoad? <Loading></Loading>:<></>
      }
     
    <h1>Hello</h1>
    <input type='file' onChange={(event)=>{
      console.log("gsj",event.target.files[0]);
      setFile(event.target.files[0]);
    }}></input>
    <button onClick={uploadFileToStorage}>Upload File to Storage</button>
    <br></br>
    {
      images.map(imageObj=>
         <img key={imageObj.id} src={imageObj.urlLink}/>
      )
    }
    <br>
    </br>
    <button onClick={()=>{getAllImages()}}>Get All Images from storage</button>
    </div>
  );
}

export default App;
