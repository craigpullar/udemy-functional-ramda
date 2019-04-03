import * as R from 'ramda';

const video = {
  '720p': 'funny-video-hd.mp4',
  '480p': 'funny-video-480.mp4',
  isHD: true,
};

const getVideoFilePath = (input) => {
  const file = input.isHD ? input['720p'] : input['480p'];
  return `/api/videos/${file}`;
};

console.log(getVideoFilePath(video));

const getVideoFilePathBetter = R.compose(
  R.concat('/api/videos/'),
  R.ifElse(
    R.propEq('isHD', true),
    R.prop('720p'),
    R.prop('480p'),
  ),
);

console.log(getVideoFilePathBetter(video));

const getMessage = (isWorkingTime) => {
  const onlineMessage = 'We are online';
  const offlineMessage = 'We are offline';
  return isWorkingTime ? onlineMessage : offlineMessage;
};

const getMessageWorse = (isWorkingTime) => {
  const onlineMessage = 'We are online';
  const offlineMessage = 'We are offline';
  return R.ifElse(
    R.always(isWorkingTime),
    R.always(onlineMessage),
    R.always(offlineMessage),
  );
};
