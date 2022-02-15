export default function getAllTypesOfWork() {
    return new Promise((resolve) => {
        resolve([
            { id: 1, name: 'Remote' },
            { id: 2, name: 'Full-time' },
            { id: 3, name: 'Part-time' },
        ]);
    });
}
