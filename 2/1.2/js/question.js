// The Quiz, when selecting answers, select with a number, should not be higher than 3

//for example:
/*

 options: ['answer 0', 'answer 1', 'answer 2', 'answer 3']
 answer: 1

*/
const quiz = [

    {
        question: 'Mes sœurs sont ….le 20 février .',
        options: [
            'né', 'née', 'nés', 'nées'
        ],
        answer: 3
    },

    {
        question: 'En ….mois nous sommes.',
        options: [
            'quels', 'quel', 'quelle', 'quelles'
        ],
        answer: 1
    },

    {
        question: '…..copine de Marie est sympa.',
        options: [
            'le', 'la', 'l’', 'Les'
        ],
        answer: 0
    },

    {
        question: 'Les amies de Marie ….. Sandrine et Anna.',
        options: [
            't’appelles', 's’appellent', 's’appelle', 'vous appellez'
        ],
        answer: 1
    },    
    
    {
        question: 'Je n’ai pas….ciseaux.',
        options: [
            'de', 'un', 'd’', ' des'
        ],
        answer: 0
    },

    {
        question: '…….c’est ? – c’est Paule.',
        options: [
            'Qui', 'Que', 'Quoi', 'Quel'
        ],
        answer: 0
    },

    {
        question: 'C’est…tube de colle de Marie.',
        options: [
            'l’', 'le', 'la', 'les'
        ],
        answer: 1
    },

    {
        question: 'Son anniversaire, c’est…7 septembre.',
        options: [
            'en', 'le', 'au', 'de'
        ],
        answer: 1
    },

    {
        question: '….bracelet tu aimes?',
        options: [
            'Quel', 'Quelle' , 'Quels', 'Quelles'
        ],
        answer: 2
    },

    {
        question: 'Voilà…porte-clés de monsieur Mounir.',
        options: [
            'l’', 'le', 'la', 'les'
        ],
        answer: 1
    },
    {
        question: '….c’est?',
        options: [
            'Où', 'Qu’est-ce que ', 'Comment', 'Quel'
        ],
        answer: 1
    },
    {
        question: '…..chambre de Marie est rangée.',
        options: [
            'les','la', 'L’', 'le'
        ],
        answer: 1
    },
    {
        question: 'C’est un sac…dos.',
        options: [
            'en', 'de', 'à' , 'au'
        ],
        answer: 2
    },
    {
        question: 'Les règles sont…',
        options: [
             'orange', 'rouge', 'jaune','gris'
        ],
        answer: 0
    },
    {
        question: 'Ton anniversaire, c’est… ?',
        options: [
             'Quand', 'Quelle', 'Qui','Que'
        ],
        answer: 0
    },
    {
        question: 'Vous…quel âge ?',
        options: [
             'avons', 'avez', 'êtes','sommes'
        ],
        answer: 1
    },
    {
        question: 'Ils ….des trousses.',
        options: [
             'ont', 'sont', 'avez','a '
        ],
        answer: 0
    },
    {
        question: 'J’adore le dessin et … ?',
        options: [
             'toi', 'moi', 'je','tu'
        ],
        answer: 0
    },
    {
        question: 'Ali n’a pas……examen.',
        options: [
             'un', 'une', 'de','d’'
        ],
        answer: 3
    },
    {
        question: 'Ma mère est…',
        options: [
             'timide', 'intelligent ', 'bavard','actives'
        ],
        answer: 0
    },
    {
        question: 'Je…au football.',
        options: [
             'joues', 'joue', 'jouer','jouons'
        ],
        answer: 1
    },
    {
        question: 'Je n’aime pas…toutes les sciences.',
        options: [
             'de', 'du', 'd’','des'
        ],
        answer: 1
    },
    {
        question: 'Mon oncle est né…mois de janvier.',
        options: [
             'dans', 'au', 'à','en'
        ],
        answer: 1
    },
    {
        question: '…..mardi, je vais au club.',
        options: [
             'le', 'la', 'en','dans'
        ],
        answer: 0
    },
    {
        question: '…jeudi, je visite ma tante.',
        options: [
             'Tous', 'Tout', 'Toutes','Chaque'
        ],
        answer: 3
    },
    {
        question: 'Ce…les livres de mon camarade.',
        options: [
             'sommes', 'est', 'a','sont'
        ],
        answer: 3
    },
    {
        question: 'Je suis née…2003.',
        options: [
             'le', 'en', 'dans','en'
        ],
        answer: 1
    },
    {
        question: 'Je préfère les trousses……',
        options: [
             'colorée ', 'colorés', 'colorées','coloré'
        ],
        answer: 2
    },
    {
        question: 'Le vert est …..couleur.',
        options: [
             'un', 'une', 'des','de'
        ],
        answer: 1
 
    },
    {
        question: 'Je suis souriante…ma mère.',
        options: [
             'et', 'comme', 'où','mais'
        ],
        answer: 1
 
    },
    {
        question: 'Manon et baba……….des bracelets.',
        options: [
             'Collectionne', 'Collectionnes', 'Collectionnez','Collectionnent'
        ],
        answer: 3
 
    },

];
