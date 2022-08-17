import type { Post } from 'types/news'
import {
    Box,
    Heading,
    Stack,
    Link,
    Text,
    Button,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import { DateTime } from 'components/DateTime'
import { TagLink } from 'components/TagLink';

type Props = {
    news: Post[]
}

export const PostList = ({ news }: Props) => {
    return (
        <>
            {news.map(news => (
                <Box key={news.id}>
                    <Wrap>
                        {news.categories.map(categories => (
                            <WrapItem key={categories.id}>
                                <TagLink categories={categories} />
                            </WrapItem>
                        ))}
                    </Wrap>
                    <Link href={`/news/${news.id}`}>
                        <Heading
                            as="h2"
                            fontSize="3xl"
                            lineHeight={1.6}
                            marginTop="1"
                            flex={1}
                            cursor="pointer"
                        >
                            {news.title}
                        </Heading>
                    </Link>
                    <DateTime datetime={news.publishedAt as string} />
                    <Text mt="1" fontSize="xl" color="gray.500">{news.description}</Text>
                    <Link href={`/news/${news.id}`}>
                        <Button colorScheme='teal' variant='outline' size="sm" mt="8">
                            続きを読む
                        </Button>
                    </Link>
                    <Stack mt="10" mb="10" borderBottom="1px" borderColor="gray.300" />
                </Box>
            ))}
        </>
    )
}