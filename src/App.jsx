import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Reg from "./pages/Reg.jsx";
import Mod from "./pages/Mod.jsx";
import Member from "./pages/Member.jsx";
import {createContext, useReducer, useRef} from "react";

// 데이터 작업
const memData = [
  {
    no: 1,
    avatarId: 1,
    id: 'hong',
    pwd: 1234,
    name: '홍길동',
    age: 20,
    email: 'hong@gmail.com',
    address: '서울시',
    phone: '010-1234-5678',
    createDate: new Date(2024, 6, 2).getTime()
  },
  {
    no: 2,
    avatarId: 2,
    id: 'kim',
    pwd: 1234,
    name: '김철수',
    age: 25,
    email: 'kim@gmail.com',
    address: '부산시',
    phone: '010-1234-5678',
    createDate: new Date(2024, 6, 3).getTime()
  },
  {
    no: 3,
    avatarId: 3,
    id: 'lee',
    pwd: 1234,
    name: '이영희',
    age: 30,
    email: 'lee@gmail.com',
    address: '대구시',
    phone: '010-1234-5678',
    createDate: new Date(2024, 6, 5).getTime()
  }
]

function reducer(data, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...data]
    case 'UPDATE':
      return data.map(
          (item) => String(item.no) === String(action.data.no) ? action.data
              : item
      )
    case 'DELETE':
      return data.filter((item) => {
        return String(item.no) !== String(action.data.no)
      })
    default:
      return data
  }
}

export const MemberStateContext = createContext();
export const MemberDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, memData);
  const idRef = useRef(4);

  //멤버추가
  const onCreate = (avatarId, id, pwd, name, age, email, address, phone,
      createDate) => {
    dispatch({
      type: 'CREATE',
      data: {
        no: idRef.current++,
        avatarId,
        id,
        pwd,
        name,
        age,
        email,
        address,
        phone,
        createDate
      }
    })
  }
  const onUpdate = (no, avatarId, id, pwd, name, age, email, address, phone,
      createDate) => {
    dispatch({
      type: 'UPDATE',
      data: {
        no,
        avatarId,
        id,
        pwd,
        name,
        age,
        email,
        address,
        phone,
        createDate
      }
    })
  }
  const onDelete = (no) => {
    dispatch({
      type: 'DELETE',
      data: {
        no
      }
    })
  }

  return (
      <>
        <section>
          <MemberStateContext.Provider value={data}>
            <MemberDispatchContext.Provider
                value={{onCreate, onUpdate, onDelete}}>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/reg" element={<Reg/>}/>
                <Route path="/mod/:no" element={<Mod/>}/>
                <Route path="/member/:id" element={<Member/>}/>
              </Routes>
            </MemberDispatchContext.Provider>
          </MemberStateContext.Provider>
        </section>
      </>
  )
}

export default App
