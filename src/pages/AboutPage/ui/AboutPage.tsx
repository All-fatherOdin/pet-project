import {useIntl} from "react-intl"


function AboutPage(){
  const intl = useIntl()
  return(
    <div>
      {intl.formatMessage({id: "About"})}
    </div>
  )
}

export default AboutPage