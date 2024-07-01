import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {MemberDispatchContext, MemberStateContext} from "../App.jsx";
import Register from "../components/Register.jsx";

const Mod = () => {
  const nav = useNavigate();
  const params = useParams();
  const {onDelete} = useContext(MemberDispatchContext);
  const [curMemberItem, setCurMemberItem] = useState()
  const data = useContext(MemberStateContext);

  useEffect(() => {
    const curMemberItem = data.find((item) => {
      return String(item.no) === String(params.no)
    })
    if (!curMemberItem) {
      alert('해당 회원이 없습니다.')
      nav('/', {replace: true})
    } else {
      setCurMemberItem(curMemberItem)
    }
  }, [params.no, data])
  console.log(params.no)
  const onClickDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDelete(params.no)
      nav('/', {replace: true})
    }
  }

  return (
      <div>
        <Header title={'수정하기'} leftChild={<Button text={'뒤로가기'} onClick={() => {
          nav(-1)
        }}/>} rightChild={<Button text={'삭제하기'} onClick={onClickDelete}/>}/>
        <Register initItem={curMemberItem} name={params.no}/>
      </div>
  )
}
export default Mod