import React, { useState, useEffect, useContext } from 'react';
import styles from '../../../styles/Classes.module.css';

const classes = [
    {
        name: 'Cultista',
        description: 'Os cultistas são devotos de um ser antigo e desconhecido, e estão dispostos a fazer qualquer coisa para agradá-lo. Eles são versados em rituais sinistros e têm um conhecimento profundo do oculto. Como desvantagem, costumam ser perseguidos e malvistos pela sociedade.',
        strengths: 'Conhecimento em ocultismo e rituais',
        weaknesses: 'Vulneráveis a ataques de luz e santidade',
        story: 'Desde cedo, o cultista sentiu uma atração inexplicável pelas artes sombrias e ocultas. Depois de anos estudando e praticando, ele encontrou o ser a quem dedicaria sua vida e sua alma. Agora, ele busca cumprir as vontades de seu mestre, mesmo que isso signifique sacrificar outras vidas em seu nome.'
    },
    {
        name: 'Caçador',
        description: 'Os caçadores são especialistas em lidar com ameaças sobrenaturais. Eles têm treinamento militar e conhecem bem o manuseio de armas e técnicas de combate. Como desvantagem, podem ser imprudentes e subestimar o poder de certas criaturas.',
        strengths: 'Habilidade em combate e estratégia',
        weaknesses: 'Propensos a subestimar os inimigos',
        story: 'O caçador nasceu em uma família militar, e desde pequeno foi treinado em combate. Quando começaram a ocorrer eventos sobrenaturais na cidade, ele foi um dos primeiros a notar e a se preparar para lidar com eles. Agora, ele se dedica a proteger a cidade e a eliminar ameaças sobrenaturais.'
    },
    {
        name: 'Médium',
        description: 'Os médiuns têm a habilidade de se comunicar com espíritos e entidades sobrenaturais. Eles são dotados de uma sensibilidade aguçada e são capazes de identificar presenças invisíveis. Como desvantagem, podem ser alvos fáceis para possessões e outros ataques sobrenaturais.',
        strengths: 'Habilidade em comunicação com o sobrenatural',
        weaknesses: 'Vulneráveis a ataques de possessão',
        story: 'Desde criança, o médium sempre teve contato com seres sobrenaturais. Com o tempo, ele aprendeu a controlar essa habilidade e a utilizá-la em benefício próprio. No entanto, ele também sabe que sua sensibilidade atrai a atenção de criaturas perigosas, e por isso sempre se mantém alerta.'
    },
    {
        name: 'Necromante',
        description: 'Os necromantes têm o poder de invocar e controlar mortos-vivos. Eles são hábeis em manipular energias e conhecem bem a anatomia dos mortos. Como desvantagem, seu poder é considerado uma blasfêmia pela maioria das pessoas.',
        strengths: 'Habilidade em invocação de mortos-vivos',
        weaknesses: 'Vulneráveis a ataques de luz e santidade',
        story: 'Desde jovem, o necromante mostrou um interesse incomum na morte. Ele estudou em segredo as artes proibidas da necromancia, até que finalmente conseguiu dominá-las. Agora, ele usa seu poder para dominar os mortos e atingir seus objetivos, mesmo que isso signifique se afastar cada vez mais da humanidade.'
    },
    {
        name: 'Assassino',
        description: 'Os assassinos são especialistas em matar rapidamente e sem serem vistos. Eles se infiltram facilmente em lugares onde não deveriam estar e usam sua habilidade com venenos e armas leves para eliminar seus alvos.',
        strengths: 'Invisibilidade, habilidade com venenos',
        weaknesses: 'Fracos em combate direto',
        story: 'O assassino cresceu em uma família de ladrões e aprendeu a arte do roubo desde muito jovem. Com o tempo, ele se especializou em assassinatos e se tornou um dos mais procurados na cidade. Ele agora vive nas sombras, sempre pronto para matar aqueles que se opõem a ele.'
    }]

function Classes() {
    return (
        <div className={styles.container}>
            {classes.map((cls) => (
                <div key={cls.name}>
                    <h2 className={styles.h2}>{cls.name}</h2>
                    <p className={styles.p}>{cls.description}</p>
                    <p className={styles.p}><strong className={styles.strong}>Forças:</strong> {cls.strengths}</p>
                    <p className={styles.p}><strong className={styles.strong}>Fraquezas:</strong> {cls.weaknesses}</p>
                    <p className={styles.p}><strong className={styles.strong}>História:</strong> {cls.story}</p>
                </div>
            ))}
        </div>
    );
}

export default Classes;