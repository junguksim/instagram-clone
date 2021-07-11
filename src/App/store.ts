import { Reducer } from "react";
import { Action, compose, createStore } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }

  type DefaultStore = {
    storyList: StoryList;
    feedList: Feed[];
  };
  type UserSimpleInfo = {
    id: number;
    username: string;
    avatar: string;
  };

  type StoryList = {
    friendList: UserSimpleInfo[];
  };

  type Feed = {
    id: number;
    username: string;
    avatar: string;
    content: string;
    image: string;
    likes: number;
  };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer: Reducer<unknown, Action<any>> = function (state, action) {
  if (state === undefined) {
    return {
      storyList: {
        friendList: [
          {
            id: 1,
            username: "kduding0",
            avatar: "https://robohash.org/dolorumeaasperiores.png?size=50x50&set=set1",
          },
          {
            id: 2,
            username: "egocke1",
            avatar: "https://robohash.org/facilisiustoesse.png?size=50x50&set=set1",
          },
          {
            id: 3,
            username: "xmaruszewski2",
            avatar: "https://robohash.org/veritatisetid.png?size=50x50&set=set1",
          },
          {
            id: 4,
            username: "zhaversham3",
            avatar: "https://robohash.org/laboreexeaque.png?size=50x50&set=set1",
          },
          {
            id: 5,
            username: "dblore4",
            avatar: "https://robohash.org/illumvitaeminima.png?size=50x50&set=set1",
          },
          {
            id: 6,
            username: "kbradbrook5",
            avatar: "https://robohash.org/autemquiacorporis.png?size=50x50&set=set1",
          },
          {
            id: 7,
            username: "kcawtheray6",
            avatar: "https://robohash.org/sequiutid.png?size=50x50&set=set1",
          },
          {
            id: 8,
            username: "olaminman7",
            avatar: "https://robohash.org/placeatdoloresratione.png?size=50x50&set=set1",
          },
          {
            id: 9,
            username: "sskivington8",
            avatar: "https://robohash.org/inventoreexcepturirerum.png?size=50x50&set=set1",
          },
          {
            id: 10,
            username: "fself9",
            avatar: "https://robohash.org/omnisquaeratsed.png?size=50x50&set=set1",
          },
        ],
      },
      feedList: [
        {
          id: 1,
          username: "lharnett0",
          avatar: "https://robohash.org/etreprehenderitbeatae.png?size=50x50&set=set1",
          content: "Ameliorated full-range infrastructure",
          image: "http://dummyimage.com/500x500.png/ff4444/ffffff",
          likes: 86940,
        },
        {
          id: 2,
          username: "kattryde1",
          avatar: "https://robohash.org/repellatvoluptasomnis.png?size=50x50&set=set1",
          content: "Business-focused 24 hour encoding",
          image: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
          likes: 55479,
        },
        {
          id: 3,
          username: "cflay2",
          avatar: "https://robohash.org/hicsitlabore.png?size=50x50&set=set1",
          content: "Front-line web-enabled time-frame",
          image: "http://dummyimage.com/500x500.png/dddddd/000000",
          likes: 11886,
        },
        {
          id: 4,
          username: "ttutin3",
          avatar: "https://robohash.org/temporamolestiaesoluta.png?size=50x50&set=set1",
          content: "Self-enabling tangible local area network",
          image: "http://dummyimage.com/500x500.png/cc0000/ffffff",
          likes: 81637,
        },
        {
          id: 5,
          username: "dgrimshaw4",
          avatar: "https://robohash.org/perspiciatisdelenitialiquid.png?size=50x50&set=set1",
          content: "Profound maximized challenge",
          image: "http://dummyimage.com/500x500.png/cc0000/ffffff",
          likes: 98322,
        },
        {
          id: 6,
          username: "kgarforth5",
          avatar: "https://robohash.org/sequiperspiciatisreprehenderit.png?size=50x50&set=set1",
          content: "Multi-layered stable benchmark",
          image: "http://dummyimage.com/500x500.png/dddddd/000000",
          likes: 93346,
        },
        {
          id: 7,
          username: "umussington6",
          avatar: "https://robohash.org/repellatquiodio.png?size=50x50&set=set1",
          content: "Down-sized explicit encoding",
          image: "http://dummyimage.com/500x500.png/cc0000/ffffff",
          likes: 67709,
        },
        {
          id: 8,
          username: "ggilsthorpe7",
          avatar: "https://robohash.org/doloremvoluptasid.png?size=50x50&set=set1",
          content: "Fully-configurable hybrid capacity",
          image: "http://dummyimage.com/500x500.png/ff4444/ffffff",
          likes: 41767,
        },
        {
          id: 9,
          username: "bhuleatt8",
          avatar: "https://robohash.org/eumdistinctiofacere.png?size=50x50&set=set1",
          content: "Inverse responsive ability",
          image: "http://dummyimage.com/500x500.png/cc0000/ffffff",
          likes: 46831,
        },
        {
          id: 10,
          username: "aizzett9",
          avatar: "https://robohash.org/sedetrerum.png?size=50x50&set=set1",
          content: "Organic mission-critical protocol",
          image: "http://dummyimage.com/500x500.png/5fa2dd/ffffff",
          likes: 13494,
        },
      ],
    };
  }
  return state;
};

export default createStore(reducer, composeEnhancers());
