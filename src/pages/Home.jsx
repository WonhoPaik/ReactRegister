import Header from "../components/Header.jsx";
import MemberList from "../components/MemberList.jsx";
import {useContext, useState} from "react";
import {MemberStateContext} from "../App.jsx";

const Home = () => {

  const data = useContext(MemberStateContext);
  return (
      <div className='Home'>
        <Header title='Member List'/>
        <MemberList data={data}/>
      </div>
  )
}
export default Home