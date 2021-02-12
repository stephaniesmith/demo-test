export interface People {
    id: string;
    name: string;
    gender: string;
    age: string;
    eye_color: string;
    hair_color: string;
    films: string[];
    species: string;
    url: string;
}

export interface PeopleParams {
    gender: string;
    eyeColor: string;
    hairColor: string;
}
