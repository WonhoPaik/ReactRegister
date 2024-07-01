import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {MemberStateContext} from "../App.jsx";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Viewer from "../components/Viewer.jsx";

const Member = () => {
  const params = useParams()
  const nav = useNavigate()
  const data = useContext(MemberStateContext)
  const [curMemberItem, setCurMemberItem] = useState(null)

  useEffect(() => {
    const currentMemberItem = data.find((item) => {
      return String(item.id) === String(params.id)
    })
    if (!currentMemberItem) {
      alert('해당 회원이 없습니다.')
      nav('/', {replace: true})
    } else {
      setCurMemberItem(currentMemberItem)
    }
  }, [params.id, data])

  return (
      <div>
        {curMemberItem && (
            <>
              <Header title={`${curMemberItem.name} 님 정보`} leftChild={<Button
                  onClick={() => {
                    nav(-1)
                  }} text={'< 뒤로 가기'}/>}
                      rightChild={<Button
                          onClick={() => {
                            nav(`/mod/${curMemberItem.no}`)
                          }} text={'수정하기'}/>}
              />
              <Viewer
                  avatarId={curMemberItem.avatarId}
                  id={curMemberItem.id}
                  pwd={curMemberItem.pwd}
                  name={curMemberItem.name}
                  age={curMemberItem.age}
                  email={curMemberItem.email}
                  address={curMemberItem.address}
                  phone={curMemberItem.phone}
                  createDate={curMemberItem.createDate}
              />
            </>
        )}
      </div>
  )
}
export default Member
