import Pod1 from '../assets/pod1.jpg'
import Pod2 from '../assets/pod2.jpg'
import Pod3 from '../assets/pod3.jpg'
import Pod4 from '../assets/pod4.jpg'
import Pod5 from '../assets/pod5.png'
import Up from '../assets/status-up.png'
import Down from '../assets/status-down.png'
import Equal from '../assets/status-equal.png'

export const cardsData = [
    { Image: (Pod1), 
        Position: 1, 
        Name: 'Café da manhã', 
        Description: 'Suspense', 
        Performer: 'SpotifyStudios',
        Details: 'Levante da cama com notícias e análises quentinhas no Café da Manhã, o podcast mais importante do seu dia. Em uma parceria entre Folha de S.Paulo e Spotify, os jornalistas Magê Flores, Maurício Meireles e Bruno Boghossian trazem nas manhãs de segunda a sexta, de forma leve e simples, o fundamental...',
        Status: (Equal)
    },
    { Image: (Pod2), 
        Position: 2, 
        Name: 'Quem pode, pod', 
        Description: 'CCC', 
        Performer: 'DDD',
        Status: (Up)
    },
    { Image: (Pod3), 
        Position: 3, 
        Name: 'Teste', 
        Description: 'EEE', 
        Performer: 'FFF',
        Status: (Down)
    },
    { Image: (Pod4), 
        Position: 4, 
        Name: 'Teste', 
        Description: 'EEE', 
        Performer: 'FFF',
        Status: (Equal)
    },
    { Image: (Pod5), 
        Position: 5, 
        Name: 'Teste', 
        Description: 'EEE', 
        Performer: 'FFF',
        Status: (Up)
    },
   
  ];
  