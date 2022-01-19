import { useState } from 'react';

const useModal = (initalMode = false) => {
    const [isOpened, setIsOpened] = useState(initalMode);

    function toggle() {
        setIsOpened(!isOpened);
    }

    return [isOpened, toggle];
};

export default useModal;
