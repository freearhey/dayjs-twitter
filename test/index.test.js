import dayjs from 'dayjs'
import plugin from '../src'
import 'dayjs/locale/pt-br'
import 'dayjs/locale/es'
import 'dayjs/locale/ru'

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
  expect(instance.subtract(1, 'year').twitter()).toBe(
    instance.subtract(1, 'year').format('MMM D, YYYY')
  )
})

it('return localized date', () => {
  const instance = dayjs()

  expect(instance.locale('es').twitter()).toBe('Ahora')
  expect(instance.locale('es').subtract(10, 'second').twitter()).toBe('10s')
  expect(instance.locale('es').subtract(1, 'minute').twitter()).toBe('1min')
  expect(instance.locale('es').subtract(59, 'minute').twitter()).toBe('59min')
  expect(instance.locale('es').subtract(80, 'minute').twitter()).toBe('1h')
  expect(instance.locale('es').subtract(120, 'minute').twitter()).toBe('2h')
  expect(instance.locale('es').subtract(23, 'hour').twitter()).toBe('23h')
  expect(instance.locale('es').subtract(1, 'day').twitter()).toBe(
    instance.locale('es').subtract(1, 'day').format('D MMM.')
  )
  expect(instance.locale('es').subtract(1, 'year').twitter()).toBe(
    instance.locale('es').subtract(1, 'year').format('D MMM. YYYY')
  )

  expect(instance.locale('ru').twitter()).toBe('1 с')
  expect(instance.locale('ru').subtract(10, 'second').twitter()).toBe('10 с')
  expect(instance.locale('ru').subtract(1, 'minute').twitter()).toBe('1 мин')
  expect(instance.locale('ru').subtract(59, 'minute').twitter()).toBe('59 мин')
  expect(instance.locale('ru').subtract(80, 'minute').twitter()).toBe('1 ч')
  expect(instance.locale('ru').subtract(120, 'minute').twitter()).toBe('2 ч')
  expect(instance.locale('ru').subtract(23, 'hour').twitter()).toBe('23 ч')
  expect(instance.locale('ru').subtract(1, 'day').twitter()).toBe(
    instance.locale('ru').subtract(1, 'day').format('D MMM.')
  )
  expect(instance.locale('ru').subtract(1, 'year').twitter()).toBe(
    instance.locale('ru').subtract(1, 'year').format('D MMM. YYYY')
  )

  expect(instance.locale('pt-br').twitter()).toBe('Agora')
})
