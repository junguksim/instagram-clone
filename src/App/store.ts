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
    createdAt: string;
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
          username: "jdiiorio0",
          avatar: "https://robohash.org/repellenduseaquesunt.png?size=50x50&set=set1",
          content: "Cross-group stable Graphic Interface",
          image: "http://dummyimage.com/455x500.png/cc0000/ffffff",
          likes: 525060,
          createdAt: "2021-03-17",
        },
        {
          id: 2,
          username: "akacheller1",
          avatar: "https://robohash.org/istealiasveniam.png?size=50x50&set=set1",
          content: "Public-key coherent software",
          image: "http://dummyimage.com/498x500.png/5fa2dd/ffffff",
          likes: 238366,
          createdAt: "2020-08-11",
        },
        {
          id: 3,
          username: "tclogg2",
          avatar: "https://robohash.org/aspernaturutsapiente.png?size=50x50&set=set1",
          content: "Horizontal multi-tasking internet solution",
          image: "http://dummyimage.com/498x500.png/5fa2dd/ffffff",
          likes: 220915,
          createdAt: "2021-05-23",
        },
        {
          id: 4,
          username: "adodle3",
          avatar: "https://robohash.org/estquidemlabore.png?size=50x50&set=set1",
          content: "Switchable impactful knowledge base",
          image: "http://dummyimage.com/401x500.png/ff4444/ffffff",
          likes: 868019,
          createdAt: "2021-06-03",
        },
        {
          id: 5,
          username: "vvaughten4",
          avatar: "https://robohash.org/impeditsapienteoptio.png?size=50x50&set=set1",
          content: "Automated logistical flexibility",
          image: "http://dummyimage.com/413x500.png/dddddd/000000",
          likes: 612788,
          createdAt: "2020-11-27",
        },
        {
          id: 6,
          username: "edunkerton5",
          avatar: "https://robohash.org/earumetab.png?size=50x50&set=set1",
          content: "Grass-roots 4th generation artificial intelligence",
          image: "http://dummyimage.com/452x500.png/5fa2dd/ffffff",
          likes: 469914,
          createdAt: "2021-02-16",
        },
        {
          id: 7,
          username: "wvasyukhichev6",
          avatar: "https://robohash.org/sedvoluptatumaut.png?size=50x50&set=set1",
          content: "Configurable optimizing leverage",
          image: "http://dummyimage.com/474x500.png/5fa2dd/ffffff",
          likes: 44132,
          createdAt: "2021-06-18",
        },
        {
          id: 8,
          username: "rleneve7",
          avatar: "https://robohash.org/eumarchitectoautem.png?size=50x50&set=set1",
          content: "User-centric demand-driven process improvement",
          image: "http://dummyimage.com/436x500.png/cc0000/ffffff",
          likes: 407959,
          createdAt: "2020-10-18",
        },
        {
          id: 9,
          username: "cclaire8",
          avatar: "https://robohash.org/teneturimpeditodit.png?size=50x50&set=set1",
          content: "Profit-focused full-range algorithm",
          image: "http://dummyimage.com/494x500.png/dddddd/000000",
          likes: 787414,
          createdAt: "2020-10-17",
        },
        {
          id: 10,
          username: "lpendlington9",
          avatar: "https://robohash.org/utarchitectovoluptas.png?size=50x50&set=set1",
          content: "De-engineered zero administration methodology",
          image: "http://dummyimage.com/401x500.png/5fa2dd/ffffff",
          likes: 3793,
          createdAt: "2021-01-08",
        },
      ],
    };
  }
  return state;
};

export default createStore(reducer, composeEnhancers());
