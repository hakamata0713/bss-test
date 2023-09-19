import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import type { PostTag } from 'types/news';

type Props = {
    categories?: PostTag;
    currentPage?: string; // 追加: 現在のページ名を受け取るプロパティ
    isNewsPage?: boolean; // 追加: ニュースページかどうかのフラグ
};

export const Breadcrumbs = ({ categories, currentPage, isNewsPage }: Props) => {
    return (
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' fontSize="xl" fontWeight="bold" />} mb="8">
            <BreadcrumbItem>
                <BreadcrumbLink href='/' fontSize="2xl" fontWeight="bold" >Home</BreadcrumbLink>
            </BreadcrumbItem>
            
            {isNewsPage && (
                <BreadcrumbItem>
                    <BreadcrumbLink href='/news' fontSize="2xl" fontWeight="bold" >ニュース</BreadcrumbLink>
                </BreadcrumbItem>
            )}
            
            {categories && (
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/categories/${categories.id}/page/1`} fontSize="2xl" fontWeight="bold">{categories.name}</BreadcrumbLink>
                </BreadcrumbItem>
            )}
            
            {currentPage && (
                <BreadcrumbItem>
                    <BreadcrumbLink fontSize="2xl" fontWeight="bold">{currentPage}</BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};