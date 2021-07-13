import { Reducer } from "react";
import { Action, compose, createStore } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }

  type DefaultStore = {
    storyList: Story[];
    feedList: Feed[];
  };
  type UserSimpleInfo = {
    id: number;
    username: string;
    avatar: string;
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

  type Story = {
    id: number;
    username: string;
    avatar: string;
    story: string;
  };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer: Reducer<unknown, Action<any>> = function (state, action) {
  if (state === undefined) {
    return {
      storyList: [
        {
          id: 1,
          username: "mbaskwell0",
          avatar: "https://robohash.org/totamquiinventore.png?size=50x50&set=set1",
          story: "http://dummyimage.com/300x500.png/dddddd/000000",
        },
        {
          id: 2,
          username: "pkincla1",
          avatar: "https://robohash.org/estquosimilique.png?size=50x50&set=set1",
          story: "http://dummyimage.com/300x500.png/cc0000/ffffff",
        },
        {
          id: 3,
          username: "haveline2",
          avatar: "https://robohash.org/sitdoloremquequi.png?size=50x50&set=set1",
          story: "http://dummyimage.com/300x500.png/ff4444/ffffff",
        },
        {
          id: 4,
          username: "hemmitt3",
          avatar: "https://robohash.org/veniamrerumnemo.png?size=50x50&set=set1",
          story: "http://dummyimage.com/300x500.png/dddddd/000000",
        },
        {
          id: 5,
          username: "edietzler4",
          avatar: "https://robohash.org/quibusdamquodet.png?size=50x50&set=set1",
          story: "http://dummyimage.com/300x500.png/dddddd/000000",
        },
        {
          id: 6,
          username: "lyggo5",
          avatar: "https://robohash.org/suntiureconsequuntur.png?size=50x50&set=set1",
          story: "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
        },
        {
          id: 7,
          username: "cwheaton6",
          avatar: "https://robohash.org/culpadoloremolestias.png?size=50x50&set=set1",
          story: "http://dummyimage.com/300x500.png/5fa2dd/ffffff",
        },
        {
          id: 8,
          username: "scayette7",
          avatar: "https://robohash.org/dolorumquamdolore.png?size=50x50&set=set1",
          story: "http://dummyimage.com/300x500.png/ff4444/ffffff",
        },
        {
          id: 9,
          username: "zniese8",
          avatar: "https://robohash.org/eaatquedolorem.png?size=50x50&set=set1",
          story: "http://dummyimage.com/300x500.png/dddddd/000000",
        },
        {
          id: 10,
          username: "rdoddrell9",
          avatar: "https://robohash.org/odiodoloreseum.png?size=50x50&set=set1",
          story: "http://dummyimage.com/300x500.png/cc0000/ffffff",
        },
      ],
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
