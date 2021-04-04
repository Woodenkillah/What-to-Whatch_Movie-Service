export const dataToUserInfoAdapter = (responseData) => {
  const userInfo = {
    email: responseData[`email`],
    avatar: responseData[`avatar_url`],
  };
  return userInfo;
};

export const dataToReviewItemAdapter = (responseData) => {
  const reviewItems = responseData.map((item) => {
    return ({
      id: item[`id`],
      user: {
        id: item.user[`id`],
        name: item.user[`name`]
      },
      rating: item[`rating`],
      comment: item[`comment`],
      date: item[`date`]
    });
  });
  return reviewItems;
};

export const dataToSingleFilmAdapter = (responseData) => {
  const singleFilmData = {
    id: responseData[`id`],
    name: responseData[`name`],
    posterImage: responseData[`poster_image`],
    previewImage: responseData[`preview_image`],
    backgroundImage: responseData[`background_image`],
    backgroundColor: responseData[`background_color`],
    videoLink: responseData[`video_link`],
    previewVideoLink: responseData[`preview_video_link`],
    description: responseData[`description`],
    rating: responseData[`rating`],
    scoresCount: responseData[`scores_count`],
    director: responseData[`director`],
    starring: responseData[`starring`],
    runTime: responseData[`run_time`],
    genre: responseData[`genre`],
    released: responseData[`released`],
    isFavorite: responseData[`is_favorite`]
  };
  return singleFilmData;
};

export const dataToFilmsArrayAdapter = (responseData) => {
  const filmsData = responseData.map((film) => ({
    id: film[`id`],
    name: film[`name`],
    posterImage: film[`poster_image`],
    previewImage: film[`preview_image`],
    backgroundImage: film[`background_image`],
    backgroundColor: film[`background_color`],
    videoLink: film[`video_link`],
    previewVideoLink: film[`preview_video_link`],
    description: film[`description`],
    rating: film[`rating`],
    scoresCount: film[`scores_count`],
    director: film[`director`],
    starring: film[`starring`],
    runTime: film[`run_time`],
    genre: film[`genre`],
    released: film[`released`],
    isFavorite: film[`is_favorite`]
  }));
  return filmsData;
};

