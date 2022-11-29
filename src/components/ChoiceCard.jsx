import { useContext } from "react"
import { ChoicesContext } from "./Popup"

const ChoiceCard = ({content, handleChange}) => {
  const value = useContext(ChoicesContext)
  
  return (
    <label className='choice-card'>
        <input type="checkbox" id={content} checked={value.includes(content)} value={content} onChange={handleChange} />
        <span className='choice-text'>{content}</span>
    </label>
  )
}

export default ChoiceCard