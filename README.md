# dayjs-twitter

dayjs-twitter is a plugin to [day.js](https://github.com/iamkun/dayjs) that formats dates like Twitter

## Installation

### NPM

  ```sh
  npm install dayjs-twitter
  ```

  ```js
  import dayjs from 'dayjs'
  import dayjsTwitter from 'dayjs-twitter'

  dayjs.extend(dayjsTwitter)
  ```

### CDN

  ```html
  <script src="https://unpkg.com/dayjs"></script>
  <script src="https://cdn.jsdelivr.net/npm/dayjs-twitter/dist/dayjs-twitter.min.js"></script>
  <script>
    dayjs.extend(dayjsTwitter.default)
  </script>
  ```

## Usage

```js
dayjs().twitter() // => 'Now'
dayjs().subtract(10, 'second').twitter() // => '10s'
dayjs().subtract(1, 'minute').twitter() // => '1m'
dayjs().subtract(23, 'hour').twitter() // => '23h'
dayjs().subtract(1, 'day').twitter() // => 'Aug 28'
dayjs().subtract(1, 'year').twitter() // => 'Aug 28, 2018'
```

## Testing

```sh
npm test
```

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/freearhey/dayjs-twitter/issues) or a [pull request](https://github.com/freearhey/dayjs-twitter/pulls).

## License

[MIT](https://github.com/freearhey/dayjs-twitter/blob/master/LICENSE)
