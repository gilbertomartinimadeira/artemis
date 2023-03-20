export default function Money (units, cents) {

    cents = cents >= 0 ? cents: 0;
    return units + (cents/100);
}