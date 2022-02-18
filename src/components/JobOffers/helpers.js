/* eslint-disable camelcase */
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

export const sum = (app) => {
    const { company_id, applicant_name, id, applicant_id, created_at, ...rest } = app;
    const sumTotal = Object.keys(rest).reduce((acc, key) => acc + parseFloat(rest[key] || 0), 0);
    return (sumTotal / 7).toFixed(1);
};
