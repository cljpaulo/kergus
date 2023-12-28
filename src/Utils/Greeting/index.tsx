import { capitalizeFirstLetter } from '../CaptalizeFirstLetter';

export function getGreeting(): string {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    const name = 'paulo';

    let greeting = '';

    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Bom dia';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Boa tarde';
    } else {
        greeting = 'Boa noite';
    }

    const capitalizedName = capitalizeFirstLetter(name);

    return `${greeting}, ${capitalizedName}!`;
}
