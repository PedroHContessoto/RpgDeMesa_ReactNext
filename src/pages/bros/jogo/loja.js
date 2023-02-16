import React, { useState, useEffect, useContext } from 'react';
import SideBar from "../../../components/sideBar";
import styles from '../../../styles/Loja.module.css'

export default function PageLojaDoJogo() {
    const [gold, setGold] = useState(0);
    const [inventory, setInventory] = useState(0);

    const items = [
        { name: "Arma leve de madeira", category: "Arma leve", price: 1, photo: null },
        { name: "Arma leve de aço", category: "Arma leve", price: 10, photo: null },
        { name: "Arma leve de ferro", category: "Arma leve", price: 15, photo: null },
        { name: "Arma leve de bronze", category: "Arma leve", price: 20, photo: null },
        { name: "Arma média de ferro", category: "Arma média", price: 25, photo: null },
        { name: "Arma média de ouro", category: "Arma média", price: 30, photo: null },
        { name: "Arma pesada de platina", category: "Arma pesada", price: 35, photo: null },
        { name: "Arma pesada de diamante", category: "Arma pesada", price: 40, photo: null },
        { name: "Poção de cura", category: "Poção", price: 5, photo: null },
        { name: "Poção de força", category: "Poção", price: 15, photo: null },
        { name: "Poção de invisibilidade", category: "Poção", price: 25, photo: null },
        { name: "Anel de invisibilidade", category: "Acessório", price: 50, photo: null },
        { name: "Amuleto da sorte", category: "Acessório", price: 10, photo: null }
      ];

    function handleBuy(item) {
        if (gold >= item.price) {
            setGold(gold - item.price);
            setInventory([...inventory, item.name]);
            localStorage.setItem("gold", gold - item.price);
            localStorage.setItem("inventory", JSON.stringify([...inventory, item.name]));
        }
    }

    useEffect(() => {
        const storedGold = localStorage.getItem('gold');
        if (storedGold !== null) {
            setGold(parseInt(storedGold));
        }

        const savedInventory = JSON.parse(localStorage.getItem('inventory') || '[]');
        setInventory(savedInventory);
    }, []);



    return (
        <div className={styles.storeContainer}>
            <h1 className={styles.storeTitle}>Loja de RPG de terror</h1>
            <h2 className={styles.storeSubtitle}>Ouro : {gold}</h2>
            <h2 className={styles.storeSubtitle}>Armas leves</h2>
            <ul className={styles.storeList}>
                {items
                    .filter((item) => item.category === "Arma leve")
                    .map((item) => (
                        <li key={item.name} className={styles.storeItem}>
                            <div className={styles.storeItemPhoto}><img src={item.photo} alt={item.name} /></div>
                            <div className={styles.storeItemName}>{item.name}</div>
                            <div className={styles.storeItemPrice}>R${item.price}</div>
                            <button className={styles.button} onClick={() => handleBuy(item)}>Comprar</button>
                        </li>
                    ))}
            </ul>
            <h2 className={styles.storeSubtitle}>Armas médias</h2>
            <ul className={styles.storeList}>
                {items
                    .filter((item) => item.category === "Arma média")
                    .map((item) => (
                        <li key={item.name} className={styles.storeItem}>
                            <div className={styles.storeItemPhoto}><img src={item.photo} alt={item.name} /></div>
                            <div className={styles.storeItemName}>{item.name}</div>
                            <div className={styles.storeItemPrice}>R${item.price}</div>
                            <button className={styles.button} onClick={() => handleBuy(item)}>Comprar</button>
                        </li>
                    ))}
            </ul>
            <h2 className={styles.storeSubtitle}>Armas pesadas</h2>
            <ul className={styles.storeList}>
                {items
                    .filter((item) => item.category === "Arma pesada")
                    .map((item) => (
                        <li key={item.name} className={styles.storeItem}>
                            <div className={styles.storeItemPhoto}><img src={item.photo} alt={item.name} /></div>
                            <div className={styles.storeItemName}>{item.name}</div>
                            <div className={styles.storeItemPrice}>R${item.price}</div>
                            <button className={styles.button} onClick={() => handleBuy(item)}>Comprar</button>
                        </li>
                    ))}
            </ul>
        </div>)
}