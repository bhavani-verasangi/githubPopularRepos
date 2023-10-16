// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterDetails, setActiveLanguageFilterId, isActive} = props
  const {id, language} = languageFilterDetails

  const buttonClassName = isActive ? 'active-language-btn' : 'language-btn'

  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li className="language-list">
      <button
        onClick={onClickLanguageFilter}
        className={buttonClassName}
        type="button"
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
