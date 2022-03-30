/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
export const capWord = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatProcess = (process, postulant) => {

    const [ updated_at, id ] = [postulant.updatedDate, postulant.statusId];
    const newProcess = process.map(item => {
        return item.id === id
            ? {...item, updated_at, status: true}
            : {...item, status: false}
    });
    const statusIndex = newProcess.findIndex(e => e.status === true) + 1;

    newProcess.forEach((item) => {
        if (statusIndex !== 4) {
            if (item.id < statusIndex) {
                item.status = true;
            }
        } else if (item.id < statusIndex - 1) {
            item.status = true;
        }
    })
    return newProcess;
}