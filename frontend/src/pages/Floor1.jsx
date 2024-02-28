import Floor from "../components/Floor";
import NavbarOthers from "../components/NavbarOthers";

const Floor1 = () => {
    return (
        <>
            <NavbarOthers />
            <div style={{position:"absolute", top:"10vh", left:"30vw"}}>
                <Floor />
            </div>
        </>

    )
}

export default Floor1;