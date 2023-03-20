export default function Address (city, hood,street, number, zip, state) {
    return {
        city: city || '',
        hood: hood || '',
        street: street || '',
        number: number || 0,
        zip: zip || '',
        state: state || ''
    }
};