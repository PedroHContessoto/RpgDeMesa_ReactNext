import { useState } from 'react';
import BrosSideBar from '@/components/sidebar';
import styles from '@/styles/Entrada.module.css';

function Entrada() {
  const [code, setCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [gainedGold, setGainedGold] = useState(0);
  const [gainedXP, setGainedXP] = useState(0);
  const [hasLeveledUp, setHasLeveledUp] = useState(false);

  function handleCodeChange(event) {
    setCode(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const hasUnlocked = localStorage.getItem('hasUnlockedlevel2');
    if (hasUnlocked) {
      alert('Você já ganhou os pontos desse nivel');
      return;
    }
    if (code === '1234') { // Substitua '1234' pelo código correto
      const gainedGold = 30; // Defina aqui a quantidade de gold ganha pelo usuário
      const gainedXP = 100; // Defina aqui a quantidade de XP ganha pelo usuário

      const currentGold = parseInt(localStorage.getItem('gold')) || 0;
      const currentXP = parseInt(localStorage.getItem('experience')) || 0;
      const newXP = currentXP + gainedXP;
      const newGold = currentGold + gainedGold;
      const currentLevel = parseInt(localStorage.getItem('level')) || 1;
      const currentSkillPoints = parseInt(localStorage.getItem('skillPoints')) || 0;

      localStorage.setItem('gold', newGold);
      localStorage.setItem('experience', newXP);

      if (newXP >= 100) {
        localStorage.setItem('experience', currentXP - 100);
        localStorage.setItem('level', currentLevel + 1);
        localStorage.setItem('skillPoints', currentSkillPoints + 5);
        alert(`Parabéns! Você atingiu o nível ${currentLevel + 1} e ganhou 5 pontos de habilidade!`);
      }

      localStorage.setItem('hasUnlockedlevel2', true);
      setIsUnlocked(true);
      setGainedGold(gainedGold);
      setGainedXP(gainedXP);
    } else {
      alert('Código incorreto');
    }
  }

  return (
    <main className={styles.body}>
      <BrosSideBar />
      <h1 className={styles.h1}>Voce esta na sala de espera!</h1>
      {isUnlocked ? (
        <div>
          <p>Parabéns, você desbloqueou o conteúdo!</p>
          <p>Você ganhou {gainedGold} de ouro e {gainedXP} de experiência!</p>
          {/* Inclua aqui o conteúdo desbloqueado */}
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <label className={styles.label} htmlFor="code">Insira o código para passar de level:</label>
          <input
            className={styles.input}
            type="text"
            id="code"
            value={code}
            onChange={handleCodeChange}
          />
          <button className={styles.button} type="submit">Desbloquear</button>
        </form>
      )}
    </main>
  );
}

export default Entrada;