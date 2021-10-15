const day = 'monday';

switch(day) {
    case 'monday':
        console.log('Go to work');
        console.log('Study');
        break;
    case 'tuesday':
        console.log('Go to work');
        console.log('MCR tuesday session');
        break;
    case 'wednesday':
        console.log('study');
        break;
    case 'thursday':
        console.log('MCR thursday session');
        break;
    case 'friday':
        console.log('work');
        console.log('end of week');
        break;
    case 'saturday':
    case 'sunday':
        console.log('In the house every weekend!!')
}

// switch statement in if else format

if (day === 'monday') {
    console.log('Go to work');
        console.log('Study');
} else if (day === 'tuesday') {
    console.log('Go to work');
        console.log('MCR tuesday session');
} else if (day === 'wednesday') {
    console.log('study');
} else if (day === 'thursday') {
    console.log('MCR thursday session');
} else if (day === 'friday') {
    console.log('work');
        console.log('end of week');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('In the house every weekend!')
};