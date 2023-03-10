import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import Router from "next/router"
import styles from '../../../styles/Ficha.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import BrosSideBar from '@/components/sidebar';
import magias from '@/components/info/magias'



export default function Ficha() {
  const [strength, setStrength] = useState(0);
  const [agility, setAgility] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [charisma, setCharisma] = useState(0);
  const [health, setHealth] = useState(100);
  const [mana, setMana] = useState(100);
  const [experience, setExperience] = useState(0);
  const [level, setLevel] = useState(1);
  const [inventory, setInventory] = useState([]);
  const [text, setText] = useState('');
  const [gold, setGold] = useState(0);
  const [skillPoints, setSkillPoints] = useState(5);
  const [playerClass, setPlayerClass] = useState('');

  const [inputsChanged, setInputsChanged] = useState(false);

  useEffect(() => {
    const storedStrength = localStorage.getItem('strength');
    if (storedStrength !== null) {
      setStrength(parseInt(storedStrength));
    }

    const storedAgility = localStorage.getItem('agility');
    if (storedAgility !== null) {
      setAgility(parseInt(storedAgility));
    }

    const storedIntelligence = localStorage.getItem('intelligence');
    if (storedIntelligence !== null) {
      setIntelligence(parseInt(storedIntelligence));
    }

    const storedCharisma = localStorage.getItem('charisma');
    if (storedCharisma !== null) {
      setCharisma(parseInt(storedCharisma));
    }

    const storedHealth = localStorage.getItem('health');
    if (storedHealth !== null) {
      setHealth(parseInt(storedHealth));
    }

    const storedMana = localStorage.getItem('mana');
    if (storedMana !== null) {
      setMana(parseInt(storedMana));
    }

    const storedExperience = localStorage.getItem('experience');
    if (storedExperience !== null) {
      setExperience(parseInt(storedExperience));
    }

    const storedLevel = localStorage.getItem('level');
    if (storedLevel !== null) {
      setLevel(parseInt(storedLevel));
    }

    const storedInventory = localStorage.getItem('inventory');
    if (storedInventory !== null) {
      setInventory(JSON.parse(storedInventory));
    }

    const storedText = localStorage.getItem('text');
    if (storedText !== null) {
      setText(storedText);
    }

    const storedGold = localStorage.getItem('gold');
    if (storedGold !== null) {
      setGold(parseInt(storedGold));
    }

    const storedSkillPoints = localStorage.getItem('skillPoints');
    if (storedSkillPoints !== null) {
      setSkillPoints(parseInt(storedSkillPoints));
    }

  }, []);

  useEffect(() => {
    if (inputsChanged) {
      localStorage.setItem('strength', strength.toString());
      localStorage.setItem('agility', agility.toString());
      localStorage.setItem('intelligence', intelligence.toString());
      localStorage.setItem('charisma', charisma.toString());
      localStorage.setItem('health', health.toString());
      localStorage.setItem('mana', mana.toString());
      localStorage.setItem('experience', experience.toString());
      localStorage.setItem('level', level.toString());
      localStorage.setItem('inventory', JSON.stringify(inventory));
      localStorage.setItem('text', text);
      localStorage.setItem('gold', gold.toString());
      localStorage.setItem('skillPoints', skillPoints.toString());
      setInputsChanged(false);
    }
  }, [strength, agility, intelligence, charisma, health, mana, experience, level, inventory, text, gold, inputsChanged, skillPoints]);

  const handleInputChange = (event, setValue) => {
    const value = parseInt(event.target.value);
    if (skillPoints > 0) {
      setSkillPoints(skillPoints - 1);
      setValue(value);
      setInputsChanged(true);
    }
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
    setInputsChanged(true);
  }

  const handleAddToInventory = (event) => {
    event.preventDefault();
    const newInventory = [...inventory, text];
    setInventory(newInventory);
    setText('');
    setInputsChanged(true);
  }

  const handleRemoveFromInventory = (event, index) => {
    event.preventDefault();
    const newInventory = [...inventory];
    newInventory.splice(index, 1);
    setInventory(newInventory);
    setInputsChanged(true);
  }

  const handleAddGold = (event) => {
    event.preventDefault();
    const newGold = gold + 1;
    setGold(newGold);
    setInputsChanged(true);
  }

  const handleRemoveGold = (event) => {
    event.preventDefault();
    if (gold > 0) {
      const newGold = gold - 1;
      setGold(newGold);
      setInputsChanged(true);
    }
  }

  const handleLevelUp = (event) => {
    event.preventDefault();
    const newLevel = level + 1;
    const newExperience = experience - 100;
    const newSkillPoints = skillPoints + 5;
    setLevel(newLevel);
    setExperience(newExperience);
    setSkillPoints(newSkillPoints);
    setInputsChanged(true);
  }

  const handleGainExperience = (event) => {
    event.preventDefault();
    const newExperience = experience + 10;
    setExperience(newExperience);
    setInputsChanged(true);
  }

  const handleLogout = () => {
    Cookies.remove('bros.token');
    Router.push('forasteiro/login');
  };
  const handleIncreaseHealth = (event) => {
    event.preventDefault();
    setHealth(prevHealth => prevHealth + 1);
    setInputsChanged(true);
  };

  const handleDecreaseHealth = (event) => {
    event.preventDefault();
    setHealth(prevHealth => Math.max(0, prevHealth - 1));
    setInputsChanged(true);
  };

  const handleIncreaseMana = (event) => {
    event.preventDefault();
    setMana(prevMana => prevMana + 1);
    setInputsChanged(true);
  };

  const handleDecreaseMana = (event) => {
    event.preventDefault();
    setMana(prevMana => Math.max(0, prevMana - 1));
    setInputsChanged(true);
  };

  const handleClassChange = (event) => {
    const selectedClass = event.target.value;

    // verificar se o usu??rio j?? selecionou uma classe antes
    // se sim, n??o permita que ele selecione outra classe
    if (localStorage.getItem('playerClass') !== null) {
      return;
    }

    // atualiza o estado da classe
    setPlayerClass(selectedClass);
    // atualiza os atributos do personagem com base na classe selecionada
    if (selectedClass === 'Cultista') {
      setStrength(strength + 1);
      setAgility(agility + 1);
      setIntelligence(intelligence + 3);
      setCharisma(charisma + 2);
      setInputsChanged(true);
    } else if (selectedClass === 'Ca??ador') {
      setStrength(strength + 3);
      setAgility(agility + 3);
      setIntelligence(intelligence + 1);
      setCharisma(charisma + 1);
      setInputsChanged(true);
    } else if (selectedClass === 'M??dium') {
      setStrength(strength + 1);
      setAgility(agility + 1);
      setIntelligence(intelligence + 4);
      setCharisma(charisma + 1);
      setInputsChanged(true);
    } else if (selectedClass === 'Necromante') {
      setStrength(strength + 1);
      setAgility(agility + 1);
      setIntelligence(intelligence + 4);
      setCharisma(charisma + 1);
      setInputsChanged(true);
    } else if (selectedClass === 'Assassino') {
      setStrength(strength + 2);
      setAgility(agility + 5);
      setIntelligence(intelligence + 1);
      setCharisma(charisma + 1);
      setInputsChanged(true);
    }
    // salva a classe selecionada no localStorage
    localStorage.setItem('playerClass', selectedClass);
  };



  return (
    <div style={{ zIndex: 2 }}>
      <Head>
        <title>Ficha de Personagem</title>
        <link rel="icon
    do projeto" href="/favicon.ico" />
      </Head>
      <BrosSideBar />
      <main className={styles.body}>
        <h1 className={styles.h1}>Ficha do Personagem</h1>
        <form className={styles.form}>
          <h2 className={styles.h2}>Pontos de Abilidade : {skillPoints}</h2>
          <div className={styles.attributeContainer}>
            <div className={styles.attributeColumn}>
              <h2 className={styles.h2}>Atributos</h2>
              <label htmlFor="strength" className={styles.label}>For??a:</label>
              <input
                type="number"
                id="strength"
                name="strength"
                value={strength}
                onChange={(event) => handleInputChange(event, setStrength)}
                className={styles.input}
              />
              <br />
              <label htmlFor="agility" className={styles.label}>Agilidade:</label>
              <input
                type="number"
                id="agility"
                name="agility"
                value={agility}
                onChange={(event) => handleInputChange(event, setAgility)}
                className={styles.input}
              />
              <br />
              <label htmlFor="intelligence" className={styles.label}>Intelig??ncia:</label>
              <input
                type="number"
                id="intelligence"
                name="intelligence"
                value={intelligence}
                onChange={(event) => handleInputChange(event, setIntelligence)}
                className={styles.input}
              />
              <br />
              <label htmlFor="charisma" className={styles.label}>Carisma:</label>
              <input
                type="number"
                id="charisma"
                name="charisma"
                value={charisma}
                onChange={(event) => handleInputChange(event, setCharisma)}
                className={styles.input}
              />
              <br />
            </div>
            <div className={styles.attributeColumn}>
              <h2 className={styles.h2}>Status</h2>
              <p className={styles.p}>Vida: {health}</p>
              <button onClick={handleIncreaseHealth} className={styles.button}>Aumentar</button>
              <button onClick={handleDecreaseHealth} className={styles.button}>Diminuir</button>

              <p className={styles.p}>Mana: {mana}</p>
              <button onClick={handleIncreaseMana} className={styles.button}>Aumentar</button>
              <button onClick={handleDecreaseMana} className={styles.button}>Diminuir</button>

              <p className={styles.p}>Experi??ncia: {experience}</p>
              <p className={styles.p}>N??vel: {level}</p>
            </div>
          </div>

          <h2 className={styles.h2}>Classe: </h2>
          <select
            id="class"
            name="class"
            className={`${styles.select} input`}
            onClick={handleClassChange}
            onChange={(e) => setPlayerClass(e.target.value)}
          >
            {['Cultista', 'Ca??ador', 'M??dium', 'Necromante', 'Assassino'].map((classObj) => (
              <option key={classObj} value={classObj}>
                {classObj}
              </option>
            ))}
          </select>

          <div className={styles.inventoryContainer}>
            <div className={styles.inventoryColumn}>
              <h2 className={styles.h2}>Invent??rio</h2>
              <ul className={styles.ul}>
                {inventory.map((item, index) => (
                  <li key={index} className={styles.li}>
                    {item}
                    <button onClick={(event) => handleRemoveFromInventory(event, index)} className={styles.button}>Remover</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.inventoryColumn}>
              <h2 className={styles.h2}>Ouro</h2>
              <p>Ouro: {gold}</p>
              <button onClick={handleLogout} className={styles.logoutButton}>Sair</button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
