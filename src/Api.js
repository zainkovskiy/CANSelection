import axios from 'axios';

export const checkPhone = async (phone) => {
  const res = await axios.get('https://catfact.ninja/fact');
  if (res.status === 200) {
    return { result: 'ok' }
  }
}
export const requestData = async () => {
  const res = await axios.get('https://catfact.ninja/fact');
  if (res.status === 200) {
    return true
  }
}