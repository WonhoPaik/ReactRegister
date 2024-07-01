import {useNavigate, useParams} from "react-router-dom";
import Button from "./Button.jsx";
import {getEmotionImages} from "../util/getEmotionImages.js";
import './MemberItem.css'
import {useContext} from "react";
import {MemberDispatchContext} from "../App.jsx";

const MemberItem = ({
  id,
  no,
  name,
  avatarId,
  age,
  address,
  email,
  createDate
}) => {
  const nav = useNavigate();
  const {onDelete} = useContext(MemberDispatchContext);

  const onClickDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDelete(no)
      nav('/', {replace: true})
    }
  }
  return (
      <>
        <div className='MemberItem'>
          <div className='img_section' onClick={() => {
            nav(`/member/${id}`)
          }}>
            <img src={getEmotionImages(avatarId)}/>
          </div>
          <div className='info_section'>
            <div className='create_date'>
              {new Date(createDate).toLocaleDateString()}
            </div>
            <div className='content'>
              <span>{name}</span>
              <span>({email})</span>
              <span>{age}세</span>
              <span>{address}</span>
            </div>
          </div>
          <div className='button_section'>
            <Button text={'수정하기'} onClick={() => {
              nav(`/mod/${no}`)
            }}/>
            <Button text={'삭제하기'} type={'NEGATIVE'}
                    onClick={onClickDelete}/>
          </div>
        </div>
      </>
  )
}
export default MemberItem;