import '../css/main.css';
import '../sass/main.scss';

import { tableify } from './tableify';

export interface obj {
    name: string,
    surname: string,
    country: string,
    id: number
}

const json_data: obj[] = 
[
    {
        name: 'andries',
        surname: 'kloppers',
        country: 'South Africa',
        id: 0
        
    },
    {
        name: 'rhenier',
        surname: 'kloppers',
        country: 'South Africa',
        id: 1
    },
    {
        name: 'pa',
        surname: 'kloppers',
        country: 'South Africa',
        id: 2
    },
    {
        name: 'jaco',
        surname: 'kloppers',
        country: 'South Africa',
        id: 3
    },
    {
        name: 'ma',
        surname: 'kloppers',
        country: 'South Africa',
        id: 4
    }
];

tableify(json_data);