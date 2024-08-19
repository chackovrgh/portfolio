import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Theft Detection System Using IOT',
        description: "To enhance home security, we propose an Arduino Uno-based theft detection system Using a PIR sensor for movement detection and a GSM module for alerts, the system notifies users via phone calls.This low-cost solution ensures rapid response and peace of mind when away from home",
        tools: ['Arduino IDE', 'ESP 32 CAM'  ],
        role: 'Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Lip reading using AI',
        description: 'Lip reading, aided by Artificial Intelligence (AI), interprets spoken language through visual cues of lip and mouth movements.By analyzing video data captured during speech, AI algorithms extract features, classify lip movements, and translate them into words. This technology benefits the hearing-impaired, enhances privacy, and aids surveillance applications',
        tools: ['Python', 'AI models','cv'],
        role: 'AI Trainer',
        code: '',
        demo: '',
        image: travel,
    },
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },