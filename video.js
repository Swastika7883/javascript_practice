function checkVideoSupport() {
  const video = document.createElement('video');
  const formats = {
    'MP4 (H.264)': 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
    'WebM (VP8)': 'video/webm; codecs="vp8, vorbis"',
    'WebM (VP9)': 'video/webm; codecs="vp9, opus"',
    'Ogg Theora': 'video/ogg; codecs="theora, vorbis"'
  };

  const results = {};
  for (const [name, mime] of Object.entries(formats)) {
    results[name] = video.canPlayType(mime);
  }

  return results;
}

console.log(checkVideoSupport());