let jasper = {
    height: 201,
    name: 'Jasper',
    surname: 'Lichte',
    breathe: function() {
        console.log('jasper is breathing!')
    },
    eat: function() {
        console.log('nom nom nom!')
    },
    hobbies: [
        {
            name: 'cooking',
            skills: 4,
        },
        {
            name: 'reading',
            skills: 5,
        }
    ]
};

for (key in jasper) {
    console.log(key, jasper[key])
}
