export default function App() {
  return (
    <div>
      <h1>환경변수 보이기</h1>
      <p>API_URL: {import.meta.env.VITE_API_URL}</p>
      <p>1급기밀key: {import.meta.env.VITE_SECRET_KEY}</p>
    </div>
  );
}
