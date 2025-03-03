import React, { useState, useEffect } from 'react';

function DogImage() {
  
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    
    const fetchImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        
        
        if (data.status === 'success') {
          setImageUrl(data.message);
        }
        setLoading(false);  
      } catch (err) {
        setError(err);  
        setLoading(false);
      }
    };

    
    fetchImage();
  }, []);  

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки изображения: {error.message}</div>;
  }

  return (
    <div>
      <h1>Случайное изображение собаки</h1>
      <img src={imageUrl} alt="Random Dog" style={{ width: '300px', height: 'auto' }} />
    </div>
  );
}

export default DogImage;