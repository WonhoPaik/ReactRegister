import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";
import Register from "../components/Register.jsx";

const Reg = () => {
  const nav = useNavigate();
  return (
      <div className='Reg'>
        <Header title={'회원가입'} leftChild={<Button text={'뒤로가기'} onClick={() => {
          nav(-1)
        }}/>}/>
        <Register/>
      </div>
  )
}
export default Reg