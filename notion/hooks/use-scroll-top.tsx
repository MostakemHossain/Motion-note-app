import { useState,useEffect } from "react";

export const useScrollTop=(threshold=10)=>{
    const [scrolled,useScrolled]=useState(false);

    useEffect(()=>{

        const handleScroll=()=>{
            if(window.scrollY>threshold){
                useScrolled(true);
            }else{
                useScrolled(false);

            }
        };

        window.addEventListener("scroll",handleScroll);

        //unmount
        return ()=> window.removeEventListener("scroll",handleScroll)
    },[threshold]);

    return scrolled;
}