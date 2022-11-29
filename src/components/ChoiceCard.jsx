const ChoiceCard = ({content, handleCheck, handleChange}) => {
  return (
    <div className='choice-card'>
        <input type="checkbox" id={content} checked={handleCheck} value={content} onChange={handleChange} />
        <label htmlFor={content} className='choice-text'>{content}</label>
    </div>
  )
}

export default ChoiceCard