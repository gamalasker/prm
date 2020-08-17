// The Quiz, when selecting answers, select with a number, should not be higher than 3

//for example:
/*

 options: ['answer 0', 'answer 1', 'answer 2', 'answer 3']
 answer: 1

*/
const quiz = [

    {
        question: 'Tu demandes à un copain sa matière de préférée, qu’est-ce que tu dis :',
        options: [
            'Quelle matière tu aimes ?', 'Je préfère le français.', 'Le français est facile.', 'Quelle matière tu détestes ?'
        ],
        answer: 0
    },

    {
        question: 'Tu demandes à ton copain le nombre de cours le jeudi, qu’est-ce que tu dis :',
        options: [
            'Tu as combien de cours le jeudi ?', 'Le jeudi j’ai 5 cours.', 'Tu as combien de livres dans ton sac ?', 'Quel cours tu aimes ?'
        ],
        answer: 0
    },

    {
        question: 'Tu demandes l’heure à un copain que dis-tu ?',
        options: [
            'Quelle heure est-il ?', 'À quelle heure tu as français ?', 'Il est midi.', 'Il arrive à l’heure.'
        ],
        answer: 0
    },

    {
        question: 'Vous demandez à votre copain de décrire le CDI, il dit :',
        options: [
            'Je vais au CDI.', 'Il y a un CDI dans mon lycée.', 'Il y a des atlas et des dictionnaires.', 'Comment est le CDI ?'
        ],
        answer: 3
    },    
    
    {
        question: 'Tu demandes à un camarade de t’écrire sur le lycée, qu’est-ce que tu dis :',
        options: [
            'Comment est ton lycée ?', 'Où est ton lycée ?', 'Mon lycée est grand et propre.', ' J’aime mon lycée.'
        ],
        answer: 0
    },

    {
        question: 'Tu trouves une trousse en classe, qu’est-ce que tu:',
        options: [
            'À qui est cette trousse ?', 'C’est ma trousse.', 'Cette trousse, j’adore.', 'Moi aussi, j’aime cette trousse.     '
        ],
        answer: 0
    },

    {
        question: 'Tu parles de ton emploi du temps à l’école, qu’est-ce que tu dis :',
        options: [
            'J’ai 6 cours chaque jour.', 'J’aime la physique et la chimie.', 'Je suis excellent en français.', 'Quel est ton emploi du temps ?'
        ],
        answer: 0
    },

    {
        question: 'Tu demandes à un copain son jour de congé, qu’est-ce que tu dis :',
        options: [
            'Quel est ton jour de congé ?', 'Mon jour de congé est le jeudi.', 'J’aime le jour de congé ?', 'J’aime le vendredi.'
        ],
        answer: 0
    },

    {
        question: 'Tu demandes à un ami ses activités pendant le week-end, qu’est-ce qu’il dit :',
        options: [
            'Tu fais quoi le week-end ?', 'Le week-end, je reste chez moi.' , 'J’aime le football.', 'La lecture, c’est ma passion.'
        ],
        answer: 1
    },

    {
        question: 'Votre père vous demande ce qu’il y a dans votre classe, vous dites:',
        options: [
            'Qu’est-ce qu’il y a dans ta classe.', 'Il n’y a pas d’horloge. ', 'Il y a un TNI et un ordinateur.', 'Ma classe est grande.'
        ],
        answer: 2
    },
    {
        question: 'Tu demandes à un ami ce qu’il fait au self-service service, que dit-il :',
        options: [
            'Que fais-tu au self ?', 'Je déjeune avec les copains.', 'Il y a un self-service dans l’école.', 'J’aime le self-service.'
        ],
        answer: 1
    },
    {
        question: 'Tu demandes à un ami ”le self-service c’est quoi ? “, il dit :',
        options: [
            'C’est un restaurant scolaire.','C’est le CDI.', 'C’est une classe.', 'C’est un terrain de football.'
        ],
        answer: 0
    },
    {
        question: 'Un ami te demande "qu’est-ce que tu fais au CDI ?”, tu dis :',
        options: [
            'Je déjeune.', 'Je joue au tennis.', 'Je range mes livres.' , 'Je surf sur Internet.'
        ],
        answer: 3
    },
    {
        question: 'Votre ami vous demandes à quelle heure la journée scolaire commence, vous dites :',
        options: [
             'C’est le dimanche. ', 'à 8h du matin. ', 'Je ne vais pas au lycée.','Quand commence la journée scolaire ?'
        ],
        answer: 1
    },
    {
        question: 'Un ami te demande “l’atlas c’est quoi ?”, tu dis :',
        options: [
             'C’est une BD.', 'C’est un squelette.', 'C’est une histoire avec des images.','C’est un livre avec des cartes.'
        ],
        answer: 3
    },
    {
        question: 'Tu exprimes tes goûts scolaires, tu dis :',
        options: [
             'Je préfère le football.', 'Je préfère les sciences.', 'J’adore ma classe.','J’aime le vert.'
        ],
        answer: 1
    },
    {
        question: 'Un copain te demande tes activités pendant la récré, tu dis :',
        options: [
             'Je parle avec les copains.', 'La récré est à 9 heures.', 'J’écoute les professeurs.','Je regarde un film à la télé. '
        ],
        answer: 0
    },
    {
        question: 'Tu demandes à ton ami l’heure d’un cours, tu dis quoi ?',
        options: [
             'À quelle heure tu as maths le lundi ?', 'J’ai histoire à midi.', 'Il est quelle heure ?','Combien de cours tu as lundi ?'
        ],
        answer: 0
    },
    {
        question: 'Tu demandes à ton ami “où tu vas le week-end ?”, qu’est-ce qu’il dit ?',
        options: [
             'Le week-end, c’est le jeudi.', 'Je vais au club.', 'Je rentre à la maison.','Je vais au lycée.'
        ],
        answer: 1
    },
    {
        question: 'Tu demandes à un ami pourquoi il va à la bibliothèque, que dit-il ?',
        options: [
             'Pour lire des livres.', 'Pour jouer au tennis. ', 'Pour bavarder avec les copains.','Pour manger.'
        ],
        answer: 0
        
       },

];
