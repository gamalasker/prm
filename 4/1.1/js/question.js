// The Quiz, when selecting answers, select with a number, should not be higher than 3

//for example:
/*

 options: ['answer 0', 'answer 1', 'answer 2', 'answer 3']
 answer: 1

*/
const quiz = [

    {
        question: 'Tu demandes à un ami son physique, qu’est-ce que tu dis :',
        options: [
            'Je suis mince. ', 'Mon père est chauve.', 'Comment es-tu ?', 'Comment vas ton frère ? '
        ],
        answer: 2
    },

    {
        question: 'Tu demandes à ton ami de décrire son physique, que dis-tu ?',
        options: [
            ' Comment est ton physique ? ', 'C’est sympa.', 'Il a des yeux verts.', 'J’aime la physique. '
        ],
        answer: 0
    },

    {
        question: 'Tu décris ton père, tu dis :',
        options: [
            'Il est hyper grand.', 'Il préfère le basket.', 'Elle est longue et blonde.', 'Je suis souriante. '
        ],
        answer: 0
    },

    {
        question: 'Ton ami te demande quelle partie du corps on utilise pour écrire, tu dis :',
        options: [
            'On utilise la main.', 'On utilise le pied.', 'On utilise les cheveux. ', 'On utilise la bouche. '
        ],
        answer: 0
    },    
    
    {
        question: 'Ton ami te présente sa famille, tu dis :',
        options: [
            'Voici ma famille. ', 'Merci', 'Enchanté', 'Pardon '
        ],
        answer: 2
    },

    {
        question: 'Tu décris les yeux d’une copine, tu dis :',
        options: [
            'J’ai de grands yeux. ', 'Elle a les yeux marron.', 'Ils sont long et frisés.', 'Quelle est la couleur de tes yeux ?'
        ],
        answer: 1
    },

    {
        question: 'Tu demandes à un ami ses loisirs, il dit :',
        options: [
            'Je vais au cinéma pour regarder un film.', 'Que fais-tu pendant tes loisirs ?', 'Pour faire du foot je vais au club.', 'C’est un sport intéressant. '
        ],
        answer: 0
    },

    {
        question: 'Tu demandes à un ami son lieu idéal pour ses vacances, il dit :',
        options: [
            'Où tu vas en vacances ? ', 'Avec qui tu passes tes vacances ?', 'Je vais à paris.', 'Quel lieu aimes-tu ?'
        ],
        answer: 2
    },

    {
        question: 'Tu demandes à un ami le lieu de douleur, que dis-tu ?',
        options: [
            'Où est le stade ?', 'Où tu as mal ?' , 'J’ai mal à la tête.', 'Il a mal au bras.'
        ],
        answer: 2
    },

    {
        question: 'Un ami te demande le nombre de membres de ta famille, tu dis :',
        options: [
            'Ma famille se compose de 6 personnes. ', 'Combien de personnes sont dans ta famille ?', 'Voici ma famille.', 'Ma famille est super.'
        ],
        answer: 0
    },
    {
        question: 'Ton grand-père est chauve, tu dis :',
        options: [
            'Il a les chevaux longs.', 'Les cheveux sont blancs.', 'Il n’a pas de cheveux. ', 'Ses yeux sont noirs.'
        ],
        answer: 2
    },
    {
        question: 'Tu décris le caractère de ton grand-père, tu dis :',
        options: [
            'Il est dynamique. ','Elle a les yeux marron.', 'Elle est sociable. ', ' Il a les chevaux blancs'
        ],
        answer: 0
    },
    {
        question: 'Tu décris la taille de ton frère, tu dis :',
        options: [
            'Quelle est sa taille ?', 'Il est long.', 'Elle est petite.' , 'Il est gros.'
        ],
        answer: 1
     },
     {
        question: 'Tu demandes à un ami de décrire sa chambre, il dit :',
        options: [
            'Comment est ta chambre ? ','Elle Elle est propre', 'Elle est sociable. ', ' Il est rangé.'
        ],
        answer: 1
    },
    {
        question: 'Tu es hyper dynamique, tu dis:',
        options: [
            'J’aime la lecture.', 'J’aime le spor.', 'j’aime mes copains.' , 'je suis timide'
        ],
        answer: 1
     },

];
