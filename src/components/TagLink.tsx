import {
    Link,
    Tag,
    TagLabel
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import type { PostTag } from "types/news";

export const TagLink: FC<{ categories: PostTag }> = ({ categories }) => {
    return (
        <NextLink key={categories.id} href={`/categories/${categories.id}/page/1`} passHref>
            <Link>
                <Tag variant='subtle' colorScheme='cyan'>
                    <TagLabel fontSize="md">{categories.name}</TagLabel>
                </Tag>
            </Link>
        </NextLink>
    );
};