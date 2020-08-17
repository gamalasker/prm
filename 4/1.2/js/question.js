// The Quiz, when selecting answers, select with a number, should not be higher than 3

//for example:
/*

 options: ['answer 0', 'answer 1', 'answer 2', 'answer 3']
 answer: 1

*/
const quiz = [

    {
        question: 'Je suis…école.',
        options: [
            'à', 'à la', 'à l’', 'au'
        ],
        answer: 2
    },

    {
        question: 'J’ai des copines…',
        options: [
            'Sportif', 'Sportifs', 'Sportive', 'Sportives'
        ],
        answer: 3
    },

    {
        question: 'Mon grand-père est…',
        options: [
            'Musclé', 'Musclée ', 'Musclés ', 'Musclées'
        ],
        answer: 0
    },

    {
        question: '…est la passion de tes parents ?',
        options: [
            'quel', 'quelle', 'quelles', 'quels'
        ],
        answer: 1
    },    
    
    {
        question: 'Les yeux de Marie sont…',
        options: [
            'Bleues', 'Vertes', 'Bleue', 'Marron'
        ],
        answer: 3
    },

    {
        question: 'Les parents de ma mère sont…',
        options: [
            'Bruns', 'Brune', 'Brunes', 'Brun'
        ],
        answer: 0
    },

    {
        question: 'C’est ma sœur et mon grand-père,…jouent au tennis',
        options: [
            'elles', 'elle', 'ils', 'il'
        ],
        answer: 2
    },

    {
        question: '….tu vas? – à la piscine.',
        options: [
            'Pourquoi', 'Que', 'Qui', 'Où'
        ],
        answer: 3
    },

    {
        question: 'Où….les deux copains ?',
        options: [
            'va', 'vont' , 'ont', 'a'
        ],
        answer: 1
    },

    {
        question: 'Qui…au basket ? – ma sœur et mon grand-père.',
        options: [
            'Jouent', 'Joue', 'Joues', 'Jouez'
        ],
        answer: 1
    },
    {
        question: 'C’est …..canapé marron.',
        options: [
            'une', 'un', 'des', 'de'
        ],
        answer: 1
    },
    {
        question: 'Elle a une….bleue.',
        options: [
            'Casque ','Chemisier', 'Pantalon', 'Casquette '
        ],
        answer: 3
    },
    {
        question: 'Mes dents sont…',
        options: [
            'Blanche', 'Blanc', 'Blanches' , 'Blancs'
        ],
        answer: 2
    },
    {
        question: 'Tu as un oncle ? – Non, je n’ai pas…oncle.',
        options: [
             'un', 'une', 'd’','de'
        ],
        answer: 2
    },
    {
        question: 'Ma cousine aime…peluche.',
        options: [
             'son', 'sa', 'ton','mon'
        ],
        answer: 1
    },
    {
        question: 'Nous jouons au handball…les jours.',
        options: [
             'tout', 'tous', 'toute','toutes'
        ],
        answer: 1
    },
    {
        question: '….les mercredis, nous avons rendez-vous devant le lycée.',
        options: [
            'tout', 'tous', 'toute','toutes'
        ],
        answer: 1
    },
    {
        question: '….ils regardent la télé.',
        options: [
             'Lui', 'Toi', 'Moi','Eux'
        ],
        answer: 3
    },
    {
        question: 'Toi…vas à l’école ?',
        options: [
             'elle', 'je', 'tu','il'
        ],
        answer: 2
    },
    {
        question: 'Les livres sont à eux ? Oui, ce sont…livres.',
        options: [
             'Leur', 'Leurs ', 'Ses','Son'
        ],
        answer: 1
    },
    {
        question: 'Tu fais … activités en été ?',
        options: [
             'quels', 'quelles', 'quel','quelle'
        ],
        answer: 1
    },
    {
        question: 'Nous, …va au CDI.',
        options: [
             'elle', 'il', 'nous','on'
        ],
        answer: 3
    },
    {
        question: 'Nous,…sommes dynamiques.',
        options: [
             'On', 'Nous', 'Vous','Tu'
        ],
        answer: 1
    },
    {
        question: 'Ma famille…..une belle soirée.',
        options: [
             'Passe', 'Passes', 'Passez','Passent'
        ],
        answer: 0
    },
    {
        question: '…ouvre la porte ?',
        options: [
             'Qui', 'Que', 'Où','Qu’'
        ],
        answer: 0
    },
    {
        question: 'Le week-end, je vais….patinoire.',
        options: [
             'au', 'à la', 'aux','à'
        ],
        answer: 1
    },
    {
        question: 'Marc et moi,…allons au supermarché.',
        options: [
             'Ils', 'J’', 'On','Nous'
        ],
        answer: 3
    },
    {
        question: '…est ton adresse ?  ',
        options: [
             'Quel', 'quelle', 'quels','quelles'
        ],
        answer: 1
    },
    {
        question: 'Juliette et Ali sont…',
        options: [
             'Timides', 'Gentilles', 'Rousses','Douces'
        ],
        answer: 0
 
    },
    {
        question: '……lunettes tu portes ?',
        options: [
             'quel', 'quelle', 'quels','quelles'
        ],
        answer: 3
 
    },

];
