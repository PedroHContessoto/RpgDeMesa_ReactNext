import Head from 'next/head'
import BrosSideBar from '@/components/sidebar';
import styles from '@/styles/Historia.module.css';

export default function Historia() {
    return (
        <>
            <Head>
                <title>História do Jogo</title>
            </Head>
            <BrosSideBar />
            <div className={styles["main-content"]}>
                <h1 className={styles.h1}>História do Jogo</h1>
                <p className={styles.p}> Há muitos anos, um homem humilde chamado Duque Augusto herdou uma pequena fortuna de seu pai e se mudou para o campo com sua esposa e filhos. Ele sempre havia sonhado com riqueza e poder, e decidiu construir um castelo para si mesmo e sua família. Com o tempo, a construção do castelo se tornou sua obsessão e ele gastou toda sua fortuna e mais para torná-lo o mais magnífico e imponente possível.</p>

                <p className={styles.p}>No entanto, quando a família se mudou para o castelo, coisas estranhas começaram a acontecer. Augusto começou a ter pesadelos terríveis, objetos se moviam sozinhos e vozes sussurravam pelos corredores. Quando uma serva foi encontrada morta em circunstâncias misteriosas, Augusto ficou cada vez mais obcecado com a ideia de que a riqueza e o poder que ele tanto almejou estavam sendo ameaçados pelas forças sobrenaturais que habitavam o castelo.</p>

                <p className={styles.p}>Ele começou a fazer sacrifícios em nome de uma entidade sombria, esperando obter mais poder e riqueza em troca. Ele se tornou cada vez mais distante e cruel com sua esposa e filhos, que ficaram aterrorizados com a mudança em seu comportamento. Quando sua esposa tentou confrontá-lo, ele a matou em um acesso de fúria.</p>

                <p className={styles.p}>Muitos anos se passaram e o castelo ficou abandonado, sendo tomado pelo tempo e pela natureza. Rumores se espalharam sobre as assombrações no castelo e as pessoas da região começaram a evitá-lo. Até que cinco pessoas corajosas decidiram investigar a história do castelo e as lendas que o cercavam. Eles se juntaram em uma noite escura e tempestuosa, no portão de entrada do castelo.</p>

                <p className={styles.p}>Os jogadores começam a explorar o castelo, enfrentando os perigos que aparecem em cada canto. Eles descobrem que a energia sombria que habita o castelo está lentamente os corrompendo e manipulando suas mentes. Alguns jogadores começam a ter visões assustadoras, enquanto outros são atormentados por alucinações.</p>

                <p className={styles.p}>Conforme a história se desenrola, os jogadores descobrem a verdadeira história do castelo e do Duque Augusto. Eles descobrem que Augusto fez um pacto com um ser demoníaco para obter poder e riqueza, e que o castelo foi construído em cima de um antigo cemitério indígena. Agora, os jogadores precisam encontrar uma maneira de quebrar o pacto de Augusto e expulsar o mal que habita o castelo, antes que seja tarde demais.</p>

                <p className={styles.p}>No final da aventura, os jogadores terão que enfrentar o Duque Augusto e suas criaturas demoníacas em uma batalha épica. Se eles forem bem-sucedidos em derrotar Augusto e banir o mal do castelo, eles terão cumprido sua missão e podem pegar as riquezas que lá encontrarem. No entanto, se eles falharem, o castelo irá se espalhar para além dos seus muros, afetando toda a região. As criaturas demoníacas sairão do castelo e começarão a atacar as vilas e cidades próximas, espalhando o terror e a morte. Os jogadores serão considerados responsáveis pelo fracasso e serão perseguidos pelos habitantes locais, que os culparão pelas consequências terríveis que aterrorizam a região.</p>

                <p className={styles.p}>Se os jogadores forem bem-sucedidos em sua missão, encontrarão as riquezas que Augusto acumulou durante seus anos de governança tirânica. Entre ouro, joias e outros tesouros, também poderão encontrar um livro antigo, escrito em uma língua estranha. Quando traduzido, o livro revelará os segredos do pacto sombrio de Augusto e do ser demoníaco que o corrompeu.</p>

                <p className={styles.p}>Se os jogadores decidirem manter os tesouros e o livro, eles podem ter que enfrentar as consequências disso. O livro contém um conhecimento antigo e perigoso que pode atrair a atenção de outras entidades malignas. Além disso, as riquezas acumuladas de forma injusta podem corrompê-los, assim como aconteceu com o Duque Augusto.</p>

                <p className={styles.p}>Em última análise, a história do castelo assombrado é um lembrete sombrio de que a ganância e a ambição desenfreada podem ter consequências terríveis. A maldição do castelo e a influência demoníaca só foram capazes de se enraizar por causa da busca obsessiva de Augusto por riqueza e poder. Os jogadores terão que escolher se seguem os passos de Augusto ou se lutam contra as forças do mal para salvar a região.</p>
            </div>
        </>
    )
}