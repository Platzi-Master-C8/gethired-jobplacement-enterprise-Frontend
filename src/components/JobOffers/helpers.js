export const countPage = (data) => {
    const numberPerPage = Math.ceil(data.length / 10);
    return numberPerPage;
};

export const scrollTop = () => {
    if (window === 'undefined') return;
    window.scroll({ top: 0, behavior: 'smooth' });
};
