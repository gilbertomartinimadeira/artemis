module.exports = function Proposal (identification, name, birth, address, income, bioScore, schooling) {

    return (() => {
        const notifications = [];

        const privateFunction = () => {
            console.log('validated object!')
        };

        const _proposal = {
            identification: identification || 0,
            name: name || '',
            birth: birth || Date(),
            address: address || {},
            income: income || 0,
            bioScore: bioScore || 0,
            schooling: schooling || '',
            validate: () => {
                if(!identification) notifications.push('identification is required');
                if(!name) notifications.push('name is required');

                privateFunction();
        
            },
            isValid: () => notifications.length === 0,
            notifications : notifications
        };

        _proposal.validate();

        return _proposal;
    })();
    
}