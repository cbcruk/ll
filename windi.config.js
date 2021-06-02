export default {
  theme: {},
  extend: {
    lineClamp: {
      sm: '2',
    },
  },
  plugins: [
    require('windicss/plugin/forms'),
    require('windicss/plugin/line-clamp'),
  ],
}
