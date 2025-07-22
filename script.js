fetch('media.json')
  .then(response => response.json())
  .then(data => {
    const imageGallery = document.getElementById('image-gallery');
    const videoGallery = document.getElementById('video-gallery');

    // Add Images
    data.images.forEach(imgPath => {
      const img = document.createElement('img');
      img.src = imgPath;
      img.alt = "School Image";
      imageGallery.appendChild(img);
    });

    // Add Videos
    data.videos.forEach(videoPath => {
      const video = document.createElement('video');
      video.src = videoPath;
      video.controls = true;
      videoGallery.appendChild(video);
    });
  })
  .catch(error => {
    console.error('Failed to load media:', error);
  });
