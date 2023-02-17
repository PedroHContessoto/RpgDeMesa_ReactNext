const options = {
    name: "Menu ",
    menus: [
        {
            "name": "jogador",
            "links": [
                { name: "Ficha", url: "/bros/jogador/ficha/" },

            ]
        },
        {
            "name": "jogo",
            "links": [
                { name: "Classes", url: "/bros/jogo/classes/" },
                { name: "Loja", url: "/bros/jogo/loja/" },
                { name: "Historia", url: "/bros/jogo/historia/" },
            ]
        },
        {
            "name": "Fases",
            "links": [
                { name: "Entrada", url: "/bros/jogo/mapa/entrada" },
                { name: "Sala de espera", url: "/bros/jogo/mapa/salaDeEspera" },
            ]
        }
    ]
}

export default options