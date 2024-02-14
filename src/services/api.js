import { api } from 'boot/axios'

const ls = async () => {
  return Promise.resolve([{name: 'file1.txt'}, {name: 'hentai.png'}])
}

const test = async() => {
  try {
    return api.get('test', {
      headers: {
        timeout: 1000
      }
    });
  } catch (e) {
    return e;
  }
}

export { ls, test }
