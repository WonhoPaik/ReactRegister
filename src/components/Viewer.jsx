import {getEmotionImages} from "../util/getEmotionImages.js";
import './Viewer.css';

const Viewer = ({
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
}) => {
  return (
      <div>
        <div className='img_section'>
          회원님의 아바타
          <img src={getEmotionImages(avatarId)}/>
        </div>
        <div className='info_section'>
          <div className='content'>
            <span>ID : {id}</span>
            <span>password : {pwd}</span>
            <span>이름 : {name}</span>
            <span>이메일 : ({email})</span>
            <span>나이 : {age}세</span>
            <span>주소 : {address}</span>
            <span>전화번호 : {phone}</span>
            <span>가입일 : {new Date(createDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
  )
}
export default Viewer;