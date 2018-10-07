export const apiUrl = 'http://admin.bnesis.com';
export const docsDir = 'MD/';
export const lang = {
  us: {

  },
  ua: {
    'Footer': 'Підвал',
    'Pricing': 'Ціни',
    'Login': 'Вхід',
    'Feedback': "Зворотній зв'язок",
  },
};

export const getText = (currLang, text) => {
  return currLang && lang[currLang][text] || text;
};
export const feedBackUrl = "https://docs.google.com/forms/d/1uyfUirXounliTxoZ5XjSJmfVPR93w6KPCsE8deYZTPg/formResponse";
