import { useContext } from "react"
import { ChoicesContext } from "./Popup"

const ChoiceCard = ({content, handleChange}) => {
  const value = useContext(ChoicesContext)
  console.log(value)
  return (
    <div className='choice-card'>
        <input type="checkbox" id={content} checked={value.includes(content)} value={content} onChange={handleChange} />
        <label htmlFor={content} className='choice-text'>{content}</label>
    </div>
  )
}

export default ChoiceCard