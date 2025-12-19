# TODO: Change Video Imports from YouTube to Local Videos

## Steps to Complete:
- [ ] Update contentData in JavaScript to add src: "videos/{class}/video{i}.mp4" for each video in kelas10, kelas11, kelas12
- [ ] Change main-video-player iframe to <video controls> tag
- [ ] Change modal-video-player iframe to <video controls> tag
- [ ] Update loadContent for video type to set main player src to first video's src, update title/desc
- [ ] Add HTML for video list below main player (ul with id="video-list-ul")
- [ ] Update loadContent to populate video-list-ul with clickable items that call showVideoModal
- [ ] Update showVideoModal to set modal <video> src to video.src instead of YouTube embed
- [ ] Ensure <video> tags have proper styling to fill the containers

## Followup Steps:
- [ ] Test video playback in browser after changes
- [ ] Verify video files exist in videos/10/, videos/11/, videos/12/ folders
- [ ] Handle cases where videos don't load (add error handling if needed)
