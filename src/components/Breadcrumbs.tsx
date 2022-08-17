import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import type { PostTag } from 'types/news';

type Props = {
    categories?: PostTag;
};

export const Breadcrumbs = ({ categories }: Props) => {
    return (
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' fontSize="xl" fontWeight="bold" />} mb="8">
            <BreadcrumbItem>
                <BreadcrumbLink href='/' fontSize="2xl" fontWeight="bold" >Home</BreadcrumbLink>
            </BreadcrumbItem>
            {categories && (
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/categories/${categories.id}/page/1`} fontSize="2xl" fontWeight="bold">{categories.name}</BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};