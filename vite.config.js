import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  resolve: {
    alias: {
      'react': 'react',
      'react-dom': 'react-dom',
      'react-router-dom': 'react-router-dom',
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome',
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  build: {
    outDir: 'build',
    // Remove the following block unless you have specific external dependencies to exclude
    // rollupOptions: {
    //   external: ['pachamama-eventos-final/dist/assets/index-wgPPwx8R.js'], // Add the correct path
    // },
  },
};
