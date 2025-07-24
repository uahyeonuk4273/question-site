import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() === '') return;
    setQuestions([...questions, { text: question, answer: '' }]);
    setQuestion('');
  };

  const handleAnswerChange = (idx, value) => {
    setQuestions(prev => {
      const newQs = [...prev];
      newQs[idx] = { ...newQs[idx], answer: value };
      return newQs;
    });
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
          <li key={idx} style={{ marginBottom: '2rem' }}>
            <strong>Q:</strong> {q.text}
            <div style={{ marginTop: '0.5rem' }}>
              <label>
                <strong>답변:</strong>
                <textarea
                  value={q.answer}
                  onChange={(e) => handleAnswerChange(idx, e.target.value)}
                  rows={3}
                  style={{ width: '100%', marginTop: '0.25rem' }}
                />
              </label>
              {/* 여기에 답변 내용을 텍스트로 보여주기 */}
              <p style={{ marginTop: '0.5rem', whiteSpace: 'pre-wrap', backgroundColor: '#f0f0f0', padding: '0.5rem', borderRadius: '4px' }}>
                {q.answer || "아직 답변이 없습니다."}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}