import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  resolve: {
    alias: {
      'react': 'react',
      'react-dom': 'react-dom',
      'react-router-dom': 'react-router-dom',  // Add this line
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome',
    },
    extensions: ['.js', '.jsx', '.json'], // Add '.jsx' if not present
  },
};
