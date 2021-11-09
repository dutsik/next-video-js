import Player from '../../components/Player';
import PlayerCSS from '../../components/PlayerCss';

const Index = () => {
  // const videoJsOptions = {
  //   techOrder: ['youtube'],
  //   autoplay: false,
  //   controls: true,
  //   sources: [
  //     {
  //       src: 'https://www.youtube.com/watch?v=IxQB14xVas0',
  //       type: 'video/youtube',
  //     },
  //   ],
  // };
  const videoJsOptions = {
    controls: true,
    bigPlayButton: false,
    width: 320,
    height: 240,
    fluid: false,
    plugins: {
      record: {
        audio: true,
        video: true,
        maxLength: 10,
        displayMilliseconds: false,
        debug: true,
      },
    },
  };

  return (
    <>
      <a href="/">asasdasdasdd</a>
      <br />
      <h1>lolqqqo</h1>
      <Player {...videoJsOptions} />
      <PlayerCSS />
    </>
  );
};

export default Index;
