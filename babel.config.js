module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        allowlist: ['STORYBOOK_ENABLED', 'API_URL'],
      },
    ],
  ],
};
