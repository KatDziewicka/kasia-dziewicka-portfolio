module.exports = {
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 4s steps(32) 1s 1 normal both',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '32ch' },
        },
      },
    },
  },
};