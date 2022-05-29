
import {useEffect, useState} from "react";

const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(screen.width);
    const handleWindowSizeChange = () => {
            setWidth(screen.width);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    return (width <= 768);
}

export default useCheckMobileScreen