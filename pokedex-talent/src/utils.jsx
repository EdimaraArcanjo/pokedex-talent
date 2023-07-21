export function colorByType(type) {
    switch (type) {
        case "normal":
            return "#a6a877";
        case "grass":
            return "#77c850";
        case "fire":
            return "#ee7f30";
        case "water":
            return "#678fee";
        case "electric":
            return "#f7cf2e";
        case "ice":
            return "#98d5d7";
        case "ground":
            return "#dfbf69";
        case "flying":
            return "#a98ff0";
        case "poison":
            return "#a98ff0";
        case 'fighting':
            return '#bf3029';
        case 'psychic':
            return '#f65687';
        case 'dark':
            return '#725847';
        case 'rock':
            return '#b8a137';
        case 'bug':
            return '#a8b720';
        case 'ghost':
            return '#6e5896';
        case 'steel':
            return '#b9b7cf';
        case 'dragon':
            return '#6f38f6';
        case 'fairy':
            return '#f9aec7';
        default:
            return "#fff";
    }
}