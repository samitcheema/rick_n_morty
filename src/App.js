import React, { useEffect, useState } from 'react';
import axios from 'axios';

const client = axios.create({
  baseUrl: 'https://rickandmortyapi.com/api/character',
});

const App = () => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await client.get('/');
      setCharacter(response.data);
    };
    console.log(getCharacters());
    getCharacters();
  }, []);

  if (!character) return 'no characters available!';

  return (
    <div>
      <table>
        <tr>
          <th>Characters</th>
        </tr>
      </table>
    </div>
  );
};
export default App;
