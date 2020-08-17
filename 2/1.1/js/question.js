// The Quiz, when selecting answers, select with a number, should not be higher than 3

//for example:
/*

 options: ['answer 0', 'answer 1', 'answer 2', 'answer 3']
 answer: 1

*/
const quiz = [

    {
        question: 'Tu demandes à un copain de identifier un objet, tu dis:',
        options: [
            'Qu’est-ce que tu fais ?', 'C’est qui ?', 'Qui est-ce ?', 'C’est quoi ?'
        ],
        answer: 3
    },

    {
        question: 'Tu demandes à un ami les objets de sa trousse, tu dis :',
        options: [
            'Il y a quoi dans ton sac ?', 'Comment est ta trousse ?', 'Quelle est la couleur de ta trousse ?', 'Qu’est-ce qu’il y a dans ta trousse ?'
        ],
        answer: 3
    },

    {
        question: 'Tu demandes à un copain sa date de naissance, tu dis :',
        options: [
            'Où il est né ? ', 'Quand il est né ?', 'Ton anniversaire c’est quand ?', 'Quelle est la date de son anniversaire ?'
        ],
        answer: 2
    },

    {
        question: 'Tu demandes à un copain la date du jour, tu dis :',
        options: [
            'Combien de jours il y a dans la semaine ? ', 'Nous sommes le mardi 4 juin. ', 'Quelle est la date de ton anniversaire ?', 'Quelle est la date aujourd’hui ?'
        ],
        answer: 3
    },    
    
    {
        question: 'Tu demandes à un copain français ses goûts scolaires, tu dis ?',
        options: [
            'J’aime le football.', ' Je déteste les maths.', 'Quelle matière tu aimes au lycée ?', ' Quel sport tu fais ?'
        ],
        answer: 2
    },

    {
        question: 'Tu demandes à ton ami de décrire sa trousse, il dit :',
        options: [
            ' Comment est la trousse ?', '  Elle est timide. ', ' Il est nouveau. ', ' Elle est jaune et grande.'
        ],
        answer: 3
    },

    {
        question: 'Tu identifies un objet, tu dis :',
        options: [
            'C’est quoi ?', 'Voilà ma copine.', 'C’est une gomme.', 'C’est Gamal.'
        ],
        answer: 2
    },

    {
        question: 'Pour informer ton ami de ton âge, qu’est-ce que tu dis :',
        options: [
            'Quel âge tu as ?', 'Quel est son âge ?', 'J’ai 16 ans.', 'Elle a 17 ans.'
        ],
        answer: 2
    },

    {
        question: 'Pour demander à ton ami l’heure de la fête, qu’est-ce que tu dis :',
        options: [
            'Quand est la fête ?', 'Où est la fête ?' , 'Comment est ta fête ?', 'La fête est 8 heures du soir.'
        ],
        answer: 0
    },

    {
        question: 'Tu parles de ta date de naissance, tu dis :',
        options: [
            'Quand tu es né ?', 'Je suis né au Caire.', 'Je suis né en janvier.', 'Tu es né où ?'
        ],
        answer: 2
    },
    {
        question: 'Ton frère s’informe sur tes fournitures scolaires, tu dis :',
        options: [
            'J’ai une gomme et une règle.', 'J’ai une sœur.', 'J’ai beaucoup d’amis.', 'La gomme est rouge.'
        ],
        answer: 0
    },
    {
        question: 'Tu parles du continu de ta chambre tu dis :',
        options: [
            'Il y a un ordinateur.','Il y a une gomme dans la trousse.', 'Il y a une table en classe.', 'Il y a un TNI.'
        ],
        answer: 0
    },
    {
        question: 'Tu cherches ton stylo, tu dis :',
        options: [
            'Mon stylo est neuf.', 'Où est mon stylo ?', 'C’est mon stylo.','J’ai un stylo.'
        ],
        answer: 1
    },
    {
        question: 'Tu demandes à un ami les objets dans son sac, tu dis :',
        options: [
             'Qu’est-ce que c’est ?', 'Dans mon sac il y a une trousse.', 'Quelles sont les parties de la classe ?','Quels objets il y a dans ton sac ?'
        ],
        answer: 3
    },
    {
        question: 'Tu exprimes tes goûts scolaires et sportifs, tu dis :',
        options: [
             'Je préfère le club.', 'Quel sport préfères-tu ? ', 'Qu’est-ce que tu aimes au lycée ?', 'J’aime les maths et le basket '
        ],
        answer: 3
    },

];
