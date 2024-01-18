import { Card } from "@/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios";
import { useRouter } from "next/router";

import { AppContext } from "next/app";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
const schema = yup
  .object({
    title: yup.string().required(),
    body: yup.string().required(),
  })
  .required()

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Props {
    post: Post;
}

const PostEdit = ({ post } : Props) => {

    const { handleSubmit, register, formState : { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(
        () => {
            reset({
                title: post.title,
                body: post.body
            })
        },
        [post.body, post.title, reset]
    )

    const onSubmit = () => {

    }

    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('body')} />
            <p>{errors.body?.message}</p>

            <input {...register('title')} />
            <p>{errors.body?.message}</p>

            <input type="submit" />
            </form>
        </Card>
    )
}

export const getServerSideProps: GetServerSideProps = ( async (context) => {
    const id = context?.params?.id;
    const fetch = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data: Post = fetch.data

    return {
        props: {
            post: data
        }
    }
})

export default PostEdit