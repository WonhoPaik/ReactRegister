import './Register.css'
import {useContext, useEffect, useState} from "react";
import {MemberDispatchContext} from "../App.jsx";
import {useNavigate} from "react-router-dom";
import Button from "./Button.jsx";
import emotion1 from "../assets/emotion1.png";
import emotion2 from "../assets/emotion2.png";
import emotion3 from "../assets/emotion3.png";
import emotion4 from "../assets/emotion4.png";
import emotion5 from "../assets/emotion5.png";
import {getEmotionImages} from "../util/getEmotionImages.js";

const Register = ({initItem}) => {
  const {onCreate, onUpdate} = useContext(MemberDispatchContext);
  const nav = useNavigate();
  const [avatar, setAvatar] = useState(1);

  const [input, setInput] = useState({
    createDate: new Date(),
    avatarId: 1,
    id: '',
    pwd: '',
    name: '',
    age: '',
    email: '',
    address: '',
    phone: ''
  })
  useEffect(() => {
    if (initItem) {
      setInput({
        ...initItem,
        createDate: new Date(initItem.createDate)
      })
    }
  }, [initItem]);
  useEffect(() => {
    setAvatar(getEmotionImages(input.avatarId));
  }, [input.avatarId]);
  const onSubmit = (input) => {
    if (initItem) {
      onUpdate(initItem.no, input.avatarId, input.id,
          input.pwd, input.name, input.age, input.email, input.address,
          input.phone,
          input.createDate);
      nav('/', {replace: true});
      return;
    }
    onCreate(input.avatarId, input.id,
        input.pwd, input.name, input.age, input.email, input.address,
        input.phone, input.createDate);
    nav('/', {replace: true});
  }

  const onAvatarChange = (e) => {
    const avatarId = parseInt(e.target.value, 10);
    setInput({...input, avatarId});
    switch (avatarId) {
      case 1:
        setAvatar(emotion1);
        break;
      case 2:
        setAvatar(emotion2);
        break;
      case 3:
        setAvatar(emotion3);
        break;
      case 4:
        setAvatar(emotion4);
        break;
      default:
        setAvatar(emotion5);
    }
  };
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "createDate") {
      value = new Date(e.target.value);
    }
    setInput({
      ...input,
      [name]: value
    })
  }
  return (
      <>
        <div className='Register'>
          <h3>회원가입</h3>
          <section className='register_form'>
            <div className='avatar'>
              <label>아바타</label>
              <select name='avatarId' value={input.avatarId}
                      onChange={onAvatarChange}>
                <option value={1}>아바타1</option>
                <option value={2}>아바타2</option>
                <option value={3}>아바타3</option>
                <option value={4}>아바타4</option>
                <option value={5}>아바타5</option>
              </select>
              <img src={avatar} alt='아바타'/>
            </div>
            <div className='reg_input'>
              <input type='text' name='id' placeholder='아이디' value={input.id}
                     onChange={onChangeInput}/>
              <input type='password' name='pwd' placeholder='비밀번호'
                     value={input.pwd}
                     onChange={onChangeInput}/>
              <input type='text' name='name' placeholder='이름' value={input.name}
                     onChange={onChangeInput}/>
              <input type='number' name='age' placeholder='나이' value={input.age}
                     onChange={onChangeInput}/>
              <input type='email' name='email' placeholder='이메일'
                     value={input.email}
                     onChange={onChangeInput}/>
              <input type='text' name='address' placeholder='주소'
                     value={input.address}
                     onChange={onChangeInput}/>
              <input type='tel' name='phone' placeholder='전화번호'
                     value={input.phone}
                     onChange={onChangeInput}/>
            </div>
          </section>
          <section className='btn_section'>
            <Button text={'취소하기'} onClick={() => {
              nav(-1)
            }}/>
            <Button text={'가입하기'} onClick={() => {
              onSubmit(input);
              nav(-1)
            }
            }/>
          </section>
        </div>
      </>
  )
}
export default Register