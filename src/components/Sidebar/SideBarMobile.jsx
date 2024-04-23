import React, {useEffect, useState} from "react";
import {
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
    Input,
    Drawer,
    Card,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {AdjustmentsHorizontalIcon, ArrowPathIcon, CurrencyRupeeIcon} from "@heroicons/react/20/solid";
import {TagIcon} from "lucide-react";
import categoriesJson from './../../data/categories'
import {useSearch} from "./../../SearchContext";
import toast,{Toaster} from 'react-hot-toast'
import {Button} from "@material-tailwind/react";


function SidebarWithBurgerMenu({onChange}) {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [loading, setLoading] = useState(false)
    const {categories}=useSearch();
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const [filter, setFilter] = useState({
        price: "",
        brand: "",
        category: ""
    }) 
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    const handleFilterChange = (name, value) => {
        setFilter((prev) => {
            return {...filter, [name]: value}
        })
    }
    useEffect(() => {
        console.log(filter)
    }, [filter])

    const handleFilterApply = async () => {
        if (filter.price || filter.brand || filter.category) {
            console.log("getting here")
            setLoading(true)
            onChange(filter)
            setLoading(false)
        }
        else {
            toast.error("Select atleast on filter to proceed");
        }
    }

    const clearFilters=()=>{
        setFilter((prev)=>{
            return {
                price: "",
                brand: "",
                category: ""
            }
        })
    }
    return (
        <>
        <Toaster position="top-right" reverseOrder={true} />
            <IconButton variant="text" size="lg" onClick={openDrawer} className="block lg:hidden">
                {isDrawerOpen ? (
                    <XMarkIcon className="h-8 w-8 stroke-2" />
                ) : (
                        <AdjustmentsHorizontalIcon class="h-6 w-6 text-gray-500"/>
                )}
            </IconButton>
            <Drawer open={isDrawerOpen} onClose={closeDrawer}>
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full p-4"
                >
                   <div className="flex justify-end">
                        <XMarkIcon className="h-8 w-8 stroke-2" onClick={closeDrawer} />
                   </div>
                    <div className="mb-2 flex items-center gap-4 p-4 justify-between">
                        
                        <Typography variant="h5" color="blue-gray">
                            Filters
                        </Typography>
                        <div className="flex gap-1">
                            <Button size="sm" className="bg-white text-black-900">
                                <ArrowPathIcon class="h-6 w-6 text-black-900" onClick={clearFilters}/>
                            </Button>

                            <Button className="flex items-center gap-3 bg-cyan-900 text-sm" size="sm" loading={loading} onClick={handleFilterApply}>
                                {loading ? "Applying" : "Apply"}
                            </Button>
                        </div>
                        
                    </div>
                    <hr className="my-2 border-blue-gray-50" />
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
                                    <ListItem onClick={() => handleFilterChange("brand", "LEE Cooper")}>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        LEE Cooper
                                    </ListItem>
                                    <ListItem onClick={() => handleFilterChange("brand", "Levis")}>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Levis
                                    </ListItem>
                                    <ListItem onClick={() => handleFilterChange("brand", "Calvin Klein")}>
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
                                        categories?.map((category, index) => (
                                            <ListItem key={index} name={category.name} value={`${ category.name }`}
                                                onClick={() => handleFilterChange("category",`${ category.name }`)}
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
                    {/* <Alert
                        open={openAlert}
                        className="mt-auto"
                        onClose={() => setOpenAlert(false)}
                    >
                        <CubeTransparentIcon className="mb-4 h-12 w-12" />
                        <Typography variant="h6" className="mb-1">
                            Upgrade to PRO
                        </Typography>
                        <Typography variant="small" className="font-normal opacity-80">
                            Upgrade to EzCom and get even more features,
                            plugins, advanced features and premium.
                        </Typography>
                        <div className="mt-4 flex gap-3">
                            <Typography
                                as="a"
                                href="#"
                                variant="small"
                                className="font-medium opacity-80"
                                onClick={() => setOpenAlert(false)}
                            >
                                Dismiss
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                variant="small"
                                className="font-medium"
                            >
                                Upgrade Now
                            </Typography>
                        </div>
                    </Alert> */}
                </Card>
            </Drawer>
        </>
    );
}

export default SidebarWithBurgerMenu;