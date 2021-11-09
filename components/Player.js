import { useCallback, useEffect, useState } from 'react';
import videojs from 'video.js';
import 'videojs-youtube';
import 'webrtc-adapter';
import RecordRTC from 'recordrtc';
import Record from 'videojs-record/dist/videojs.record.js';
const Player = (props) => {
  const [videoEl, setVideoEl] = useState(null);
  const onVideo = useCallback((el) => {
    setVideoEl(el);
  }, []);

  useEffect(() => {
    if (videoEl == null) return;
    const player = videojs(videoEl, props);
    return () => {
      player.dispose();
    };
  }, [props, videoEl]);

  return (
    <>
      <h1>The implementation below is using react functions</h1>
      <div data-vjs-player>
        <video ref={onVideo} className="video-js" playsInline />
      </div>
    </>
  );
};

export default Player;
