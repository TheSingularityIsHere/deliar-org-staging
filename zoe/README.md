# Video Viewer

Preparation:

1. Move `video.mp4` in this directory.
2. Update `video.json` accordingly.

Presentation:

1. Serve files locally: `npm install -g serve && serve` - do NOT use Python!
2. Open http://localhost:3000 in Chrome on OS X.
3. Install app: top-right three dots menu -> Save, Share and Cast -> Install Page as App
4. Launch the app and click on the "Click to Initialize" button.
5. Use the popup window on a different screen to control the video.

Adding keyframes to video:

`ffmpeg -i video.mp4 -c:v libx264 -x264-params "keyint=1" -c:a copy video2.mp4`
