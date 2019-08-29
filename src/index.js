import Duration from 'duration-js'

const second = 1e3
const minute = 6e4
const hour = 36e5
const day = 864e5
const week = 6048e5
const month = 2592e6
const year = 31536e6

const formats = {
  seconds: 's',
  minutes: 'm',
  hours: 'h',
  days: 'd'
}

const twitterFormat = (instance) => {
  unitStr
  let diff = Math.abs(instance.diff(new Date()))
  let unit = null
  let num = null
  if (diff <= second) {
    return 'Now'
  } else if (diff < minute) {
    unit = 'seconds'
  } else if (diff < hour) {
    unit = 'minutes'
  } else if (diff < day) {
    unit = 'hours'
  } else if (diff < year) {
    return instance.format('MMM D')
  } else {
    return instance.format('MMM D, YYYY')
  }

  if (!(num && unit)) {
    let d = new Duration(diff)
    num = d[unit]()
  }

  let unitStr = unit = formats[unit]

  return num + unitStr
}

export default (o, c, d) => {
  const proto = c.prototype

  proto.twitter = function () {
    return twitterFormat(this)
  }
}