// src/components/TVProgram.tsx
/**
 * Блок телепрограммы
 */
const TVProgram = () => {
    const programs = [
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
