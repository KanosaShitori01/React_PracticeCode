import {useState, useEffect} from 'react';
function PreviewAvatar(){
    const [avatar, setAvatar] = useState();
    useEffect(()=>{
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);
    const handleChangeAva = (e) => {
        let file = e.target.files[0];
        if(file)
        file.preview = URL.createObjectURL(file);
        setAvatar(file);

        e.target.value = null;
    }
    return(
        <div className='previewAvatar'>
            <input type="file" onChange={handleChangeAva}/>
            {avatar && <img src={avatar.preview} alt='myLove'/>}
        </div>
    )
}
export default PreviewAvatar;