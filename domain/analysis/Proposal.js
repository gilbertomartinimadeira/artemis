export default function Proposal (identification, name, birth, address, income, bioScore, schooling) {
    return {
    identification: identification || 0,
    name: name || '',
    birth: birth || Date(),
    address: address || {},
    income: income || 0,
    bioScore: bioScore || 0,
    schooling: schooling || '',
    }

}