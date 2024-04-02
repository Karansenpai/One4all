import React from 'react'

const usePreviewImage = () => {
    const [imgUrl , setImgUrl] = React.useState<string | ArrayBuffer | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if(file && file.type.startsWith('image/')){
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgUrl(reader.result);
            };

            reader.readAsDataURL(file); 
        } else{

            setImgUrl(null);
            
        }
    }
   return {handleImageChange, imgUrl, setImgUrl};
}

export default usePreviewImage