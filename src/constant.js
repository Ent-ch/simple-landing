export const apiUrl = 'http://admin.bnesis.com';
export const docsDir = 'MD/';
export const lang = {
  us: {

  },
  ua: {
    'Footer': 'Підвал',
    'Pricing': 'Ціни',
    'Login': 'Вхід',
  },
};

export const getText = (currLang, text) => {
  return currLang && lang[currLang][text] || text;
};
