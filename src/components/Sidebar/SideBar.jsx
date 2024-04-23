import React, {useEffect, useState} from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    ShoppingBagIcon,
    
} from "@heroicons/react/24/solid";
import {Button} from "@material-tailwind/react";
import {ChevronRightIcon, ChevronDownIcon} from "@heroicons/react/24/outline";
import {ArrowPathIcon, CurrencyRupeeIcon} from "@heroicons/react/20/solid";
import {TagIcon} from "lucide-react";
import categoriesJson from './../../data/categories'
import {useSearch} from "./../../SearchContext";
import toast,{Toaster} from "react-hot-toast";


function SidebarWithContentSeparator({onChange}) {
    const [loading,setLoading]=useState(false)
    const [open, setOpen] = React.useState(0);
    const [filter,setFilter]=useState({
        price:"",
        brand:"",
        category:""
    })
    const {categories}=useSearch();
    
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const handleFilterChange=(name,value)=>{
        setFilter((prev)=>{
            return {...filter, [name]: value}
        })
    }
    useEffect(()=>{
        console.log(filter)
    },[filter])

    const handleFilterApply=async()=>{
        console.log(filter)
        
        if (filter.price || filter.brand || filter.category){
            setLoading(true)
            onChange(filter)
            setLoading(false)
        }
        else{
            toast.error("Select atleast on filter to proceed");
        }  
    }
    const clearFilters=()=>{
        setFilter((prev)=>{
            return {
                price:"",
                brand:"",
                category:""
            }
        })
    }
    return (
        <Card className="h-fit w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 hidden lg:block">
        <Toaster position="top-right" reverseOrder={true} />
            <div className="flex justify-between items-center mb-2 p-4">
                
                <Typography variant="h5" color="blue-gray">
                    Filters
                </Typography>
                
                <div className="flex gap-1">
                    <Button size="sm" className="bg-white text-black-900">
                        <ArrowPathIcon class="h-6 w-6 text-black-900" />
                    </Button>



                    <Button className="flex items-center gap-3 bg-cyan-900 text-sm" size="sm" loading={loading} onClick={handleFilterApply}>
                        {loading ? "Applying" : "Apply"}
                    </Button>
                </div>
            </div>
            <List>
                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${ open === 1 ? "rotate-180" : "" }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <CurrencyRupeeIcon class="h-6 w-6 text-gray-500" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Price
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Low to High
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                High to Low
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${ open === 2 ? "rotate-180" : "" }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Brand
                            </Typography>
                            <ListItemSuffix>
                                <Chip value="3" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                            </ListItemSuffix>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem onClick={()=>handleFilterChange("brand","LEE Cooper")}>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                LEE Cooper
                            </ListItem>
                            <ListItem onClick={()=>handleFilterChange("brand","Levis")}>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                               Levis
                            </ListItem>
                            <ListItem onClick={()=>handleFilterChange("brand","Calvin Klein")}>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                               Calvin Klein
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 3}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${ open === 3 ? "rotate-180" : "" }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <TagIcon class="h-6 w-6 text-gray-500" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Categories
                            </Typography>
                            <ListItemSuffix>
                                <Chip value={categories?.length} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                            </ListItemSuffix>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                        {
                                categories?.map((category,index)=>(
                                <ListItem key={index} name={category.name} value={`${category.name}`}
                                    onClick={() => handleFilterChange("category",`${category.name}`)}
                                 >
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    {category.name}
                                </ListItem>

                            ))
                        }
                           
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Fruits
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Millets
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Meat
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Diary Products
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Sea Foods
                            </ListItem>
                        </List>
                    </AccordionBody>
                    
                </Accordion>
            </List>
        </Card>
    );
}

export default SidebarWithContentSeparator;