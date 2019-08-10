export default function(requestConfig) {
  const token = localStorage.getItem('token');
  requestConfig.headers.authorization = token;
  return requestConfig;
};