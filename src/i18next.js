import i18next from 'i18next';

export default i18next.init({
  lng: 'ru', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    ru: {
      translation: {
        key: 'ошибка ввода данных',
      },
    },
  },
}).then((t) => {
  // initialized and ready to go!
  document.getElementById('output').innerHTML = i18next.t('key');
});
