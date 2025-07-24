import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() === '') return;
    setQuestions([...questions, question]);
    setQuestion('');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>질문 사이트</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="질문을 입력하세요"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ padding: '0.5rem', width: '300px', marginRight: '0.5rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          등록
        </button>
      </form>

      <ul style={{ marginTop: '2rem' }}>
        {questions.map((q, idx) => (
          <li key={idx} style={{ marginBottom: '1rem' }}>
            {q}
          </li>
        ))}
      </ul>
    </div>
  );
}
