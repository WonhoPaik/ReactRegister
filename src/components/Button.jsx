import './Button.css'
//공통의 컴포넌트: text, colorType, onClick
const Button = ({text, type, onClick}) => {

  return (
      <>
        <button onClick={onClick}
                className={`Button Button_${type}`}>{text}</button>
      </>
  )
}
export default Button;