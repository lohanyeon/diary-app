import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import emotion1 from "./img/emotion1.png";
import { getEmotionImgById } from './util';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import React, { useEffect, useReducer, useRef, useState } from 'react';

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const mockData = [
  {
    id: "0",
    date: new Date().getTime() - 1,
    content: "mock1",
    emotionId: 1,
  },
  {
    id: "1",
    date: new Date().getTime() - 2,
    content: "mock2",
    emotionId: 2,
  },
  {
    id: "2",
    date: new Date().getTime() - 3,
    content: "mock3",
    emotionId: 3,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((it) => String(it.id) === String(action.data.id) ? { ...action.data } : it);
    }
    case "DELETE": {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    default: {
      return state;
    }
  }
}

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      }
    });
    idRef.current += 1;
  };
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      }
    });
  };
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };
  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
    idRef.current = mockData.length;
  }, []);

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/new" element={<New />}></Route>
              <Route path="/diary/:id" element={<Diary />}></Route>
              <Route path="/edit/:id" element={<Edit />}></Route>
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
  
}

export default App;
