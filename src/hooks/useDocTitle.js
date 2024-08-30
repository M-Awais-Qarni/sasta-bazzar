import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Sasta-Bazzar`;
        } else {
            document.title = 'Sasta-Bazzar | The Perfect Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
