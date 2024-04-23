import { Outlet } from "react-router-dom";

const ProductLayout=()=>{
    return (
        <>
            <div className="flex justify-center pt-10">
                <Outlet />
            </div>
        </>
    )
}


export default ProductLayout;