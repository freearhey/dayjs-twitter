import dayjs from 'dayjs'
import plugin from '../src'

dayjs.extend(plugin)

it('return formatted date', () => {
  const instance = dayjs()

  expect(instance.twitter()).toBe('Now')
  expect(instance.subtract(10, 'second').twitter()).toBe('10s')
  expect(instance.subtract(1, 'minute').twitter()).toBe('1m')
  expect(instance.subtract(59, 'minute').twitter()).toBe('59m')
  expect(instance.subtract(80, 'minute').twitter()).toBe('1h')
  expect(instance.subtract(120, 'minute').twitter()).toBe('2h')
  expect(instance.subtract(23, 'hour').twitter()).toBe('23h')
  expect(instance.subtract(1, 'day').twitter()).toBe(instance.subtract(1, 'day').format('MMM D'))
  expect(instance.subtract(1, 'year').twitter()).toBe(instance.subtract(1, 'year').format('MMM D, YYYY'))
})