// src/components/Wish.js
import React, { useState } from 'react';

const Wish = ({ name }) => {
  const [answer, setAnswer] = useState('');
  const correctAnswer = 'bubu';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === correctAnswer) {
      // Redirect to Google.com if the answer is correct
      window.location.href = 'https://drive.google.com/file/d/1sZq_f0gLv3p0xBvCQ259q3DgLoiTM-Wt/view';
    } else {
      // Display wrong answer message if the answer is incorrect
      alert('Wrong answer! Please try again.');
      setAnswer('');
    }
  };

  return (
    <div>
      <div className='wish-message'>
        HAPPY BIRTHDAY <span className='highlight'>{name.toUpperCase()}</span> !!!
      </div>
      <br/>
      <br/>
      <form onSubmit={handleSubmit} className='question-form'>
        <label htmlFor='answer' className='question-label'>
          What do I call you?
        </label>
        <input
          type='text'
          id='answer'
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className='answer-input'
        />
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Wish;
