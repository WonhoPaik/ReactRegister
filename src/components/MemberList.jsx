import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import MemberItem from "./MemberItem.jsx";
import './MemberList.css'

const MemberList = ({data}) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState('latest')

  const onChangeSortType = (e) => {
    setSortType(e.target.value)
  }

  const getSortedData = () => {
    if (sortType === 'latest') {
      return [...data].sort((a, b) => b.createDate - a.createDate);
    } else if (sortType === 'name') {
      return [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return data;
    }
  }

  const sortData = getSortedData();
  return (
      <div className='MemberList'>
        <div className='menu_bar'>
          <select value={sortType} onChange={onChangeSortType}>
            <option value={'latest'}>회원가입순</option>
            <option value={'name'}>이름순</option>
          </select>
          <Button text={'회원가입'} type={'POSITIVE'} onClick={() => {
            nav('/reg')
          }}/>
        </div>
        <div className='list_wrapper'>
          {sortData.map((item) => <MemberItem key={item.no} {...item}/>)}
        </div>
      </div>
  );
}
export default MemberList;