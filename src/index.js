import Duration from 'duration-js'

const second = 1e3
const minute = 6e4
const hour = 36e5
const day = 864e5
const week = 6048e5
const month = 2592e6
const year = 31536e6

const twitterFormat = (instance) => {
  const loc = instance.$locale()
  const locName = loc ? loc.name : 'en'
  const locale = require(`./locale/${locName}`).default

  let diff = Math.abs(instance.diff(new Date()))
  let unit = null
  let num = null
  if (diff <= second) {
    unit = 'now'
  } else if (diff < minute) {
    unit = 'seconds'
  } else if (diff < hour) {
    unit = 'minutes'
  } else if (diff < day) {
    unit = 'hours'
  } else if (diff < year) {
    unit = 'days'
  } else {
    unit = 'years'
  }

  if (!(num && unit) && ['seconds', 'minutes', 'hours'].indexOf(unit) > -1) {
    let d = new Duration(diff)
    num = d[unit]()
  }

  if(unit === 'days' || unit === 'years') {
    const format = locale[unit]
    return instance.format(format)
  } else {
    const template = locale[unit]
    return template.replace('%d', num)
  }
}

export default (o, c, d) => {
  const proto = c.prototype

  proto.twitter = function () {
    return twitterFormat(this)
  }
}