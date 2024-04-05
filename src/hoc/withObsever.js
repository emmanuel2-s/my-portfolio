import { useRef, useEffect } from 'react';

const withIntersectionObserver = (WrappedComponent) => (props) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    console.log(entry)
                    entry.classList.add('hty')
                }
            })

        });

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return <WrappedComponent ref={ref} {...props} />
};

export default withIntersectionObserver;