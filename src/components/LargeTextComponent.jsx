import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const LargeTextComponent = () => {
    /* Test out the component and how it looks like with dummy data */
    const imageSrcOne = 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80';
    const imageSrcTwo = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80';
    const altTextOne = 'Image one';
    const altTextTwo = 'Image two';
    const textContentOne = 'This is image one';
    const textContentTwo = 'This is image two';

    return (
        <>
            <LeftSection imageSrc={ imageSrcOne } altText={ altTextOne } content={ textContentOne } />
            <RightSection imageSrc={ imageSrcTwo } altText={ altTextTwo } content={ textContentTwo } />
        </>
    );
};

export default LargeTextComponent;
