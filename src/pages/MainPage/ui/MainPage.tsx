import {useIntl} from "react-intl"


function MainPage() {
  const intl = useIntl()
  return (
    <div>
      {intl.formatMessage({id: "Main"})}
    </div>
  )
}

export default MainPage