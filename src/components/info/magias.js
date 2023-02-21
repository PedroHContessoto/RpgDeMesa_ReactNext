const magias = {
    Cultista: [
        { nome: "Invocação demoníaca",levelNecessario: 1, pontosNecessarios: { intelligence: 7, charisma: 3 } },
        { nome: "Magia negra",levelNecessario: 1, pontosNecessarios: { intelligence: 6, agility: 4 } },
        { nome: "Sacrifício humano",levelNecessario: 2, pontosNecessarios: { strength: 8, intelligence: 2 } },
        { nome: "Canalização de energia",levelNecessario: 2, pontosNecessarios: { intelligence: 9, charisma: 1 } },
        { nome: "Transmigração",levelNecessario: 2, pontosNecessarios: { intelligence: 7, agility: 3 } },
        { nome: "Convocação de espíritos",levelNecessario: 3, pontosNecessarios: { intelligence: 8, charisma: 2 } },
        { nome: "Maldição",levelNecessario: 3, pontosNecessarios: { intelligence: 6, agility: 4 } },
        { nome: "Símbolos de proteção",levelNecessario: 4, pontosNecessarios: { intelligence: 9, charisma: 1 } },
        { nome: "Invisibilidade",levelNecessario: 4, pontosNecessarios: { agility: 8, intelligence: 2 } },
        { nome: "Corrupção de almas",levelNecessario: 5, pontosNecessarios: { intelligence: 7, charisma: 3 } }
      ],
      Caçador: [
        { nome: "Rastreamento",levelNecessario: 1, pontosNecessarios: { agility: 7, intelligence: 3 } },
        { nome: "Flechas de fogo",levelNecessario: 1, pontosNecessarios: { agility: 6, intelligence: 4 } },
        { nome: "Aparar golpes",levelNecessario: 4, pontosNecessarios: { agility: 8, strength: 2 } },
        { nome: "Disparo preciso",levelNecessario: 5, pontosNecessarios: { agility: 9, intelligence: 1 } },
        { nome: "Aceleração",levelNecessario: 2, pontosNecessarios: { agility: 7, strength: 3 } },
        { nome: "Esconder-se nas sombras",levelNecessario: 2, pontosNecessarios: { agility: 8, intelligence: 2 } },
        { nome: "Duelo de facas",levelNecessario: 3, pontosNecessarios: { intelligence: 6, strength: 4 } },
        { nome: "Armadilhas",levelNecessario: 4, pontosNecessarios: { agility: 9, intelligence: 1 } },
        { nome: "Armadura de couro",levelNecessario: 1, pontosNecessarios: { intelligence: 8, strength: 2 } },
        { nome: "Ataque surpresa",levelNecessario: 4, pontosNecessarios: { agility: 7, intelligence: 3 } }
      ],
      Médium: [
        { nome: "Visão espiritual",levelNecessario: 1, pontosNecessarios: { intelligence: 5, charisma: 3 } },
        { nome: "Canalização",levelNecessario: 1, pontosNecessarios: { intelligence: 7, charisma: 2 } },
        { nome: "Invocação",levelNecessario: 2, pontosNecessarios: { intelligence: 8, charisma: 2 } },
        { nome: "Exorcismo",levelNecessario: 2, pontosNecessarios: { intelligence: 7, charisma: 5 } },
        { nome: "Clarividência",levelNecessario: 3, pontosNecessarios: { intelligence: 9, charisma: 1 } },
        { nome: "Projeção astral",levelNecessario: 3, pontosNecessarios: { intelligence: 6, charisma: 4 } },
        { nome: "Leitura de aura",levelNecessario: 3, pontosNecessarios: { intelligence: 4, charisma: 8 } },
        { nome: "Percepção extra-sensorial",levelNecessario: 4, pontosNecessarios: { intelligence: 7, charisma: 3 } },
        { nome: "Comunicação com espíritos",levelNecessario: 1, pontosNecessarios: { intelligence: 7, charisma: 4 } },
        { nome: "Desdobramento",levelNecessario: 5, pontosNecessarios: { intelligence: 6, charisma: 6 } }
      ],
      Necromante: [
        { nome: "Reanimação de mortos",levelNecessario: 5, pontosNecessarios: { intelligence: 6, agility: 2 } },
        { nome: "Invocação de esqueletos",levelNecessario: 3, pontosNecessarios: { intelligence: 8, agility: 1 } },
        { nome: "Maldição",levelNecessario: 1, pontosNecessarios: { intelligence: 7, agility: 3 } },
        { nome: "Invocação de ratos",levelNecessario: 1, pontosNecessarios: { intelligence: 9, agility: 2 } },
        { nome: "Manipulação de almas",levelNecessario: 3, pontosNecessarios: { intelligence: 8, agility: 3 } },
        { nome: "Dominação de espíritos",levelNecessario: 3, pontosNecessarios: { intelligence: 7, agility: 5 } },
        { nome: "Aura sombria",levelNecessario: 2, pontosNecessarios: { intelligence: 6, agility: 6 } },
        { nome: "Necrocinese",levelNecessario: 4, pontosNecessarios: { intelligence: 9, agility: 2 } },
        { nome: "Explosão de energia negra",levelNecessario: 4, pontosNecessarios: { intelligence: 8, agility: 4 } },
        { nome: "Controle de cadáveres",levelNecessario: 2, pontosNecessarios: { intelligence: 7, agility: 6 } }
      ],
      Assassino: [
        { nome: "Ataque surpresa",levelNecessario: 1, pontosNecessarios: { agility: 6, forca: 4 } },
        { nome: "Envenenamento",levelNecessario: 1, pontosNecessarios: { inteligencia: 8, agility: 4 } },
        { nome: "Furtividade",levelNecessario: 2, pontosNecessarios: { agility: 6, inteligencia: 4 } },
        { nome: "Acrobacia",levelNecessario: 1, pontosNecessarios: { agility: 8, inteligencia: 4 } },
        { nome: "Investigação",levelNecessario: 2, pontosNecessarios: { agility: 7, forca: 5 } },
        { nome: "Disfarce",levelNecessario: 2, pontosNecessarios: { charisma: 6, inteligencia: 4 } },
        { nome: "Luta desarmada",levelNecessario: 3, pontosNecessarios: { forca: 5, agility: 7 } },
        { nome: "Arremesso de facas",levelNecessario: 3, pontosNecessarios: { agility: 8, forca: 4 } },
        { nome: "Camuflagem",levelNecessario: 4, pontosNecessarios: { agility: 6, inteligencia: 6 } },
        { nome: "Fuga",levelNecessario: 5, pontosNecessarios: { agility: 8, inteligencia: 4 } }
      ]}

export default magias;