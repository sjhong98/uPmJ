import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Configuration, OpenAIApi } from 'openai';

async function AI() {
    const configuration = new Configuration({
      organization: 'org-dXPD6KfdcU6tZcnCvuondl8n',
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
  
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: "서울에서 2일동안 방문할만한 방문지들을 나열해줘. '1 : A, B, C, D, F, 2: ~' 이런 형식으로 해줘",
      max_tokens: 1000, // 예상 토큰 수보다 크게 설정해야 전체 답변을 받을 수 있습니다.
    });
  
    console.log('Davinci:', completion.data.choices[0].text);
    return completion.data.choices[0].text;
  }

function Main() {
  const navigate = useNavigate(); 
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await AI();
      setMsg(response);
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Party One</h1>
      <h3>Welcome to Party One</h3>
      <div dangerouslySetInnerHTML={{ __html: msg }}></div>
      <button
        onClick={() => {
          navigate('/login');
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Main;
