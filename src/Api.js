import axios from 'axios';

export const checkPhone = async (phone) => {
  const res = await axios.get('https://catfact.ninja/fact');
  if (res.status === 200) {
    return { result: 'ok' }
  }
}

export const setView = async (UID) => {
  const res = await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Filter/Selection.php', {
    "action": "viewed",
    "UID": UID,
  });
}

export const requestData = async () => {
  try {
    const res = await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Filter/Selection.php', {
      "action": "getStarted",
      "phone": checkAutorization(),
      // "request": 69352,
      "request": dealId || 69352,
    });
    return res?.data || null
  } catch (err) {
    return null
  }
}

export const sendEmotion = async (UID, emotion, clear) => {
  const res = await axios.post('https://hs-01.centralnoe.ru/Project-Selket-Main/Servers/Filter/Selection.php', {
    "action": emotion,
    "UID": UID,
    "isClear": !clear
  });
}

function checkAutorization() {
  return localStorage.getItem('authorization') || false;
}