export const countPage = (data) => {
    const numberPerPage = Math.ceil(data.length / 10);
    return numberPerPage;
};

export const scrollTop = () => {
    if (window === 'undefined') return;
    window.scroll({ top: 0, behavior: 'smooth' });
};

export const helpColor = (id) => {
    const status = {
        1: 'info',
        2: 'warning',
        3: 'success',
        4: 'error',
    };
    if (status[id]) {
        return status[id];
    }

    return null;
};
