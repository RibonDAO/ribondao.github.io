export default {
  'src/**': () => {

    return [
      `yarn eslint --max-warnings=0 --cache --ext .js,.jsx src`,
      `yarn prettier --cache src`,
    ];
  },
};
