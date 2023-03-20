export default function User(id, name ,storeUnit, retailUnit, enterpriseId) {
return {
        id: id || 0,
        name: name || '',    
        storeUnit: storeUnit|| 0,
        retailUnit: retailUnit || 0,
        enterpriseId: enterpriseId || 0
    }
}