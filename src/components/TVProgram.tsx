// src/components/TVProgram.tsx
/**
 * Блок телепрограммы
 */
import React from 'react';

const TVProgram: React.FC = () => {
  const programs: string[] = [
    '02:00 THT. Best',
    '02:15 Джинглики',
    '02:25 Наедине со всеми'
  ];

  return (
    <div>
      <h3>Телепрограмма</h3>
      <ul>
        {programs.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>

  );
};

export default TVProgram;
