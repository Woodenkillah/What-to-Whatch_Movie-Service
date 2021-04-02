export const mockStringValue = `test`;

export const mockNumValue = 1;

export const mockBoolean = true;

export const mockStringSrc = `img/the-grand-budapest-hotel-poster.jpg`;

export const mockStrigArr = [`first`, `second`, `third`];

export const mockSimpleObj = {
  firstKey: `firstValue`,
  secondKey: `secondValue`
};

export const mockSimpleObjsArr = [
  {
    firstKey: `firstValue`,
    secondKey: `secondValue`
  },
  {
    firstKey: `firstValue`,
    secondKey: `secondValue`
  },
];

export const mockUserData = {
  email: `mock@gmail.ru`,
  password: `mockpass`
};

export const mockLoginUserData = {
  api: {
    "id": 1,
    "email": `Oliver.conner@gmail.com`,
    "name": `Oliver.conner`,
    "avatar_url": `img/1.png`
  },
  adapted: {
    email: `Oliver.conner@gmail.com`,
    avatar: `img/1.png`
  }
};

export const mockLogoutUserData = {
  email: ``,
  avatar: ``
};

export const mockUserReview = {
  id: 1,
  rating: 10,
  comment: `Awesome film!`
};

export const mockFilmReviewsData = {
  api: [
    {
      "id": 1,
      "user": {
        "id": 4,
        "name": `Kate Muir`
      },
      "rating": 8.9,
      "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      "date": `2019-05-08T14:13:56.569Z`
    },
    {
      "id": 2,
      "user": {
        "id": 5,
        "name": `Kate Muir`
      },
      "rating": 8.9,
      "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      "date": `2019-05-08T14:13:56.569Z`
    },
  ],
  adapted: [
    {
      id: 1,
      user: {
        id: 4,
        name: `Kate Muir`
      },
      rating: 8.9,
      comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `2019-05-08T14:13:56.569Z`
    },
    {
      id: 2,
      user: {
        id: 5,
        name: `Kate Muir`
      },
      rating: 8.9,
      comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `2019-05-08T14:13:56.569Z`
    }
  ]
};

export const mockSingleFilmData = {
  api: {
    "id": 2,
    "name": `Shutter Island`,
    "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Shutter_Island.jpg`,
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/shutter-island.jpg`,
    "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Shutter_Island.jpg`,
    "background_color": `#977461`,
    "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    "description": `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
    "rating": 4.1,
    "scores_count": 1002557,
    "director": `Martin Scorsese`,
    "starring": [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
    "run_time": 138,
    "genre": `Thriller`,
    "released": 2010,
    "is_favorite": false
  },
  adapted: {
    id: 2,
    name: `Shutter Island`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Shutter_Island.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/shutter-island.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Shutter_Island.jpg`,
    backgroundColor: `#977461`,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
    rating: 4.1,
    scoresCount: 1002557,
    director: `Martin Scorsese`,
    starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
    runTime: 138,
    genre: `Thriller`,
    released: 2010,
    isFavorite: false
  }
};

export const mockFilmsListData = {
  api: [
    {
      "id": 1,
      "name": `The Grand Budapest Hotel`,
      "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
      "preview_image": `img/the-grand-budapest-hotel.jpg`,
      "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
      "background_color": `#ffffff`,
      "video_link": `https://some-link`,
      "preview_video_link": `https://some-link`,
      "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      "rating": 8.9,
      "scores_count": 240,
      "director": `Wes Andreson`,
      "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
      "run_time": 99,
      "genre": `Comedy`,
      "released": 2014,
      "is_favorite": false
    },
    {
      "id": 2,
      "name": `Shutter Island`,
      "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Shutter_Island.jpg`,
      "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/shutter-island.jpg`,
      "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Shutter_Island.jpg`,
      "background_color": `#977461`,
      "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
      "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      "description": `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
      "rating": 4.1,
      "scores_count": 1002557,
      "director": `Martin Scorsese`,
      "starring": [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
      "run_time": 138,
      "genre": `Thriller`,
      "released": 2010,
      "is_favorite": false
    }
  ],
  adapted: [
    {
      id: 1,
      name: `The Grand Budapest Hotel`,
      posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
      previewImage: `img/the-grand-budapest-hotel.jpg`,
      backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
      backgroundColor: `#ffffff`,
      videoLink: `https://some-link`,
      previewVideoLink: `https://some-link`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      rating: 8.9,
      scoresCount: 240,
      director: `Wes Andreson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
      runTime: 99,
      genre: `Comedy`,
      released: 2014,
      isFavorite: false
    },
    {
      id: 2,
      name: `Shutter Island`,
      posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Shutter_Island.jpg`,
      previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/shutter-island.jpg`,
      backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Shutter_Island.jpg`,
      backgroundColor: `#977461`,
      videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
      previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
      rating: 4.1,
      scoresCount: 1002557,
      director: `Martin Scorsese`,
      starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
      runTime: 138,
      genre: `Thriller`,
      released: 2010,
      isFavorite: false
    }
  ]
};

export const mockInitialStoreData = {
  auth: {
    authorizationStatus: `auth/noAuth`,
    user: {
      email: ``,
      avatar: ``
    },
    errorType: ``
  },
  targetFilm: {
    targetFilmData: {
      id: 0,
      name: ``,
      posterImage: ``,
      previewImage: ``,
      backgroundImage: ``,
      backgroundColor: ``,
      videoLink: ``,
      previewVideoLink: ``,
      description: ``,
      rating: 0,
      scoresCount: 0,
      director: ``,
      starring: [],
      runTime: 0,
      genre: ``,
      released: 0,
      isFavorite: false
    },
    films: {
      activeGenre: `All genres`,
      filmsData: [],
      filmsLoadingStatus: `load/loading`
    },
    promo: {
      promoData: {
        id: 0,
        name: ``,
        posterImage: ``,
        previewImage: ``,
        backgroundImage: ``,
        backgroundColor: ``,
        videoLink: ``,
        previewVideoLink: ``,
        description: ``,
        rating: 0,
        scoresCount: 0,
        director: ``,
        starring: [],
        runTime: 0,
        genre: ``,
        released: 0,
        isFavorite: false
      },
      promoLoadingStatus: `load/loading`
    },
    reviews: {
      reviewsList: []
    },
    favorites: {
      favoritesData: []
    }
  }
};

export const mockFullStoreData = {
  auth: {
    authorizationStatus: `auth/auth`,
    user: {
      email: `mock@gmail.ru`,
      avatar: `img/1.png`
    },
    errorType: ``
  },
  targetFilm: {
    targetFilmData: {
      id: 2,
      name: `Shutter Island`,
      posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Shutter_Island.jpg`,
      previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/shutter-island.jpg`,
      backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Shutter_Island.jpg`,
      backgroundColor: `#977461`,
      videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
      previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
      rating: 4.1,
      scoresCount: 1002557,
      director: `Martin Scorsese`,
      starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
      runTime: 138,
      genre: `Thriller`,
      released: 2010,
      isFavorite: false
    },
    films: {
      activeGenre: `All genres`,
      filmsData: [
        {
          id: 1,
          name: `The Grand Budapest Hotel`,
          posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
          previewImage: `img/the-grand-budapest-hotel.jpg`,
          backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
          backgroundColor: `#ffffff`,
          videoLink: `https://some-link`,
          previewVideoLink: `https://some-link`,
          description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
          rating: 8.9,
          scoresCount: 240,
          director: `Wes Andreson`,
          starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
          runTime: 99,
          genre: `Comedy`,
          released: 2014,
          isFavorite: false
        },
        {
          id: 2,
          name: `Shutter Island`,
          posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Shutter_Island.jpg`,
          previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/shutter-island.jpg`,
          backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Shutter_Island.jpg`,
          backgroundColor: `#977461`,
          videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
          previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
          rating: 4.1,
          scoresCount: 1002557,
          director: `Martin Scorsese`,
          starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
          runTime: 138,
          genre: `Thriller`,
          released: 2010,
          isFavorite: false
        }
      ],
      filmsLoadingStatus: `load/loaded`
    },
    promo: {
      promoData: {
        id: 2,
        name: `Shutter Island`,
        posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Shutter_Island.jpg`,
        previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/shutter-island.jpg`,
        backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Shutter_Island.jpg`,
        backgroundColor: `#977461`,
        videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
        rating: 4.1,
        scoresCount: 1002557,
        director: `Martin Scorsese`,
        starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
        runTime: 138,
        genre: `Thriller`,
        released: 2010,
        isFavorite: false
      },
      promoLoadingStatus: `load/loaded`
    },
    reviews: {
      reviewsList: [
        {
          id: 1,
          user: {
            id: 4,
            name: `Kate Muir`
          },
          rating: 8.9,
          comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
          date: `2019-05-08T14:13:56.569Z`
        },
        {
          id: 2,
          user: {
            id: 5,
            name: `Kate Muir`
          },
          rating: 8.9,
          comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
          date: `2019-05-08T14:13:56.569Z`
        }
      ]
    },
    favorites: {
      favoritesData: [
        {
          id: 1,
          name: `The Grand Budapest Hotel`,
          posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
          previewImage: `img/the-grand-budapest-hotel.jpg`,
          backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
          backgroundColor: `#ffffff`,
          videoLink: `https://some-link`,
          previewVideoLink: `https://some-link`,
          description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
          rating: 8.9,
          scoresCount: 240,
          director: `Wes Andreson`,
          starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
          runTime: 99,
          genre: `Comedy`,
          released: 2014,
          isFavorite: false
        },
        {
          id: 2,
          name: `Shutter Island`,
          posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Shutter_Island.jpg`,
          previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/shutter-island.jpg`,
          backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Shutter_Island.jpg`,
          backgroundColor: `#977461`,
          videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
          previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
          rating: 4.1,
          scoresCount: 1002557,
          director: `Martin Scorsese`,
          starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
          runTime: 138,
          genre: `Thriller`,
          released: 2010,
          isFavorite: false
        }
      ]
    }
  }
};

