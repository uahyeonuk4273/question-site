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
    const newQuestions = [...questions];
    newQuestions[idx].answer = value;
    setQuestions(newQuestions);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>질문 사이트 (관리자 답변 기능 포함)</h1>

      {/* 고양이 사진 */}
      <img
        src="https://placekitten.com/400/200"
        alt="귀여운 고양이"
        style={{ marginBottom: '1rem', borderRadius: '8px' }}
      />

      {/* 질문 입력 폼 */}
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

      {/* 질문 및 답변 리스트 */}
      <ul style={{ marginTop: '2rem' }}>
        {questions.map((q, idx) => (
          <li key={idx} style={{ marginBottom: '1.5rem' }}>
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

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
    const newQuestions = [...questions];
    newQuestions[idx] = { ...newQuestions[idx], answer: value }; // 불변성 유지해서 업데이트
    setQuestions(newQuestions);
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
          <li key={idx} style={{ marginBottom: '1.5rem' }}>
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
