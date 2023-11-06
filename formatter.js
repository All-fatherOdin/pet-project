const lang = require("./public/lang/lang.json")

exports.format = function (msgs) {
  const locales = Object.keys(lang)
  let newLang = lang
  
  newLang = Object.keys(msgs).reduce((acc,key) => {
    locales.forEach(locale => {
      if(!acc[locale]){
        acc[locale] = {}
      }
      acc[locale][key] = newLang[locale][key] || key
    })
    return acc
  },{})
  return newLang
}